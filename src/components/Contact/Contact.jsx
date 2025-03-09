import css from "./Contact.module.css"

export default function Contact({ id, name, number, onDeleteContact }) {
    return (
        <li className={css.item}>
            <p className={css.text}>{name} <br /> {number}</p>
            <button className={css.button} onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </li>
    );
}
