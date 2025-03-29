import { createSlice } from "@reduxjs/toolkit";
import defaultContacts from "../../contacts.json";

const slice = createSlice({
  name: "contacs",
  initialState: {
    items: defaultContacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;