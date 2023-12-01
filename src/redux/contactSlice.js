import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '+380(11) 111-11-11' },
    { id: 'id-2', name: 'Hermione Kline', number: '+380(12) 345-67-89' },
    { id: 'id-3', name: 'Eden Clements', number: '+380(33) 333-33-33' },
    { id: 'id-4', name: 'Annie Copeland', number: '+380(77) 777-77-77' },
  ],

  reducers: {
    addContact(state, action) {
      state.push(action.payload);

    },
    
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },

    filterContact(state, action) {
     

    },
   

  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
