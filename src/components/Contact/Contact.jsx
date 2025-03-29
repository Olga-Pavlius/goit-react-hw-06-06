import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const hendleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button className={css.btn} type="button" onClick={hendleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;