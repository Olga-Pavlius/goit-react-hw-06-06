import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";


// export default function App () {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem("contacts")) || [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ];
//   });
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (name, number) => {
//     const newContact = { id: nanoid(), name, number };
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const deleteContact = (id) => {
//     setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onAddContact={addContact} />
//       <SearchBox filter={filter} onFilterChange={setFilter} />
//       <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
//     </div>
//   );
// }
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format XXX-XX-XX")
    .required("Number is required"),
});

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // const addContact = async (name, number) => {
  //   try {
  //     await contactSchema.validate({ name, number });

  //     if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //       alert(`${name} is already in contacts.`);
  //       return;
  //     }
  //     const newContact = { id: nanoid(), name, number };
  //     setContacts(prevContacts => [...prevContacts, newContact]);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const addContact = (newContact) => {
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
        alert(`${newContact.name} is already in contacts.`);
        return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
};


  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
