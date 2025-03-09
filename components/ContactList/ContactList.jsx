import css from './ContactList.module.css';
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <Contact 
                    key={id} 
                    id={id} 
                    name={name} 
                    number={number} 
                    onDeleteContact={onDeleteContact} 
                />
            ))}
        </ul>
    );
}
