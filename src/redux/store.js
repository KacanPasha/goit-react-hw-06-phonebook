import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    account: contactReducer,
    filter: filterReducer,
  },
});

store.subscribe(() =>{
  const state = store.getState();
  localStorage.setItem('contacts', JSON.stringify(state.account));
})