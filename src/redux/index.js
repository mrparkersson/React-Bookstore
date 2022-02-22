import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookslice';

const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});

export default store;
