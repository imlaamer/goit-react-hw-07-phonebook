import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    saveContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { saveContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
