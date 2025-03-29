import { createSelector } from 'reselect';

// Отримуємо всі контакти та фільтр з state
const getContacts = state => state.contacts.items;
const getFilter = state => state.filters.name;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
