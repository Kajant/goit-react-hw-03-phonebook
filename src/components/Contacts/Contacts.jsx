import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ contacts, deleteRecord }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <span className={css.contact}>
                    {name}: {number}                    
            </span>
            <button className={css.btn} onClick={() => deleteRecord(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;