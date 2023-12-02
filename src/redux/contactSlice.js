import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+380(11) 111-11-11' },
  { id: 'id-2', name: 'Hermione Kline', number: '+380(12) 345-67-89' },
  { id: 'id-3', name: 'Eden Clements', number: '+380(33) 333-33-33' },
  { id: 'id-4', name: 'Annie Copeland', number: '+380(77) 777-77-77' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) || initialState,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;

      const isDuplicate = state.some(
        contact => contact.name === name || contact.number === number
      );

      if (isDuplicate) {
        alert('a contact with the same number or name already exists');
        return state;
      }

      state.push({ id: `id-${Date.now()}`, name, number });
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
