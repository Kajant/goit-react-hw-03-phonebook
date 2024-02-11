import React, { Component } from 'react';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const contactsSample =  [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

class App extends Component {
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
  
componentDidMount() {
  const data = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : contactsSample;
  this.setState({ contacts: data });
  }

componentDidUpdate(prevProps, prevState) { 
  if (this.state.contacts.length !== prevState.contacts.length) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
onAddContact = (name, number) => {
    const newContact = this.state.contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
    if (newContact) {
    alert(`${name} is already is in contacts.`);
      return;
    }  
    this.setState(prevState => ({ contacts: [...prevState.contacts, { id: nanoid(), name, number }] }))
  };

filterInput = event => this.setState({ filter: event.target.value });

deleteRecord= id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(item => item.id !== id) }))
  };

render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({name})=>name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        <div  className={css.wrapper}>
        <h2 className={css.title}>Phonebook</h2>
          <Form
            onAddContact={this.onAddContact}
          />
          </div>
        <div  className={css.wrapper}>
        <h2 className={css.title}>Contacts</h2>
          <Filter filterInput={this.filterInput} filter={filter}/>
          <Contacts contacts={filteredContacts} deleteRecord={this.deleteRecord} />
        </div>  
      </div>
    );
  }
}

export default App;