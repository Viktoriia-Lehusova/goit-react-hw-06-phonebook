import { createSlice } from '@reduxjs/toolkit';

export const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, { payload: id }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContact, removeContact, filterContact } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
