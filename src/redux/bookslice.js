import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    items: [],
  },

  reducers: {
    addBookItem(state, action) {
      const newBook = action.payload;
      const existingBook = state.items.find((book) => book.id === newBook.id);
      if (!existingBook) {
        state.items.push({
          id: newBook.id,
          title: newBook.title,
          genre: newBook.genre,
          author: newBook.author,
        });
      } else {
        return;
      }
    },

    removeBookItem(state, action) {
      const id = action.payload;
      let existemBookItem = state.items.find((book) => book.id === id);
      if (existemBookItem === 1) {
        state.items.filter((book) => book.id !== id);
      } else {
        return;
      }
      existemBookItem--;
    },
  },
});
export const bookActions = bookSlice.actions;
export default bookSlice;
