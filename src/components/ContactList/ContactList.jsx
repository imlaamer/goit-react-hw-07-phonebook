import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts, deleteContact } from '../../redux';
import { ContactItem } from 'components';
import css from './ContactList.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const keyword = filter.trim().toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(keyword)
    );
    return filteredContacts;
  };
  const filteredContacts = getFilteredContacts();

  const { contactsBox, contactsList } = css;
  return (
    <>
      {filteredContacts.length !== 0 ? (
        <div className={contactsBox}>
          <ul className={contactsList}>
            {filteredContacts.map(contact => (
              <ContactItem
                key={contact.id}
                handleDeleteContact={() => dispatch(deleteContact(contact.id))}
                name={contact.name}
                number={contact.number}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
}
