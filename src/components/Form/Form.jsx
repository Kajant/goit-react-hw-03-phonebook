import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  
  reset = () => this.setState({ name: '', number: ''})

  render() {
    const { onAddContact } = this.props;
    const { name, number } = this.state;
    return (
      <form
        className={css.form}
        onSubmit={event => {
        event.preventDefault();
        onAddContact(name, number);
        this.reset();
      }}
      >
      <label className={css.label}>Name
        <input
          className={css.input}
          value={name}
          onChange={this.onInputChange}
          type="text"
          name="name"
          placeholder="name"
          required
        />
      </label>
      <label className={css.label}>Number
              <input
                  className={css.input}
          value={number}
          onChange={this.onInputChange}
          type="tel"
            name="number"
            placeholder="123-45-67"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />
      </label>
      <button className={css.btn} type="submit">Add contact</button>
    </form>
  );
  }
};
Form.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};
export default Form;