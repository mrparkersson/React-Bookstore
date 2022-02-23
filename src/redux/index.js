import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookslice';
import apiSlice from './apislice';

const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    api: apiSlice,
  },
});

export default store;
