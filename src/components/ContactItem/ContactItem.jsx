import css from './ContactItem.module.css';

export function ContactItem({ handleDeleteContact, name, number }) {
  const { contactsItem, contactsText, contactDeleteBtn } = css;
  return (
    <>
      <li className={contactsItem}>
        <p className={contactsText}>
          {name} : {number}
        </p>
        <button
          type="button"
          className={contactDeleteBtn}
          onClick={handleDeleteContact}
        >
          Delete
        </button>
      </li>
    </>
  );
}
