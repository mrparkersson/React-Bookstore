import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    items: [],
  },

  reducers: {
    addBookItem(state, action) {
      const newBook = action.payload;
      const existingBook = state.items.find(
        (book) => book.title === newBook.title
      );
      if (!existingBook) {
        state.items.push({
          id: uuidv4(),
          title: newBook.title,
          category: newBook.category,
        });

        return state;
      } else {
        return state;
      }
    },

    removeBookItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      return state;
    },
  },
});
export const bookActions = bookSlice.actions;
export default bookSlice;
