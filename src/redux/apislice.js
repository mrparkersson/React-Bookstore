import { createReducer } from '@reduxjs/toolkit';
import { bookActions } from './bookslice';
import { v4 as uuidv4 } from 'uuid';

export const addBook =
  ({ title, category }) =>
  async (dispatch) => {
    const book = {
      item_id: uuidv4(),
      title: title,
      category: category,
    };

    const respone = await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RRt5fcSZEcJzHK4WjGdg/books`,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: book.item_id,
          title: book.title,
          category: book.category,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (respone.status === 201) {
      dispatch(
        bookActions.addBookItem({
          item_id: book.item_id,
          title: book.title,
          category: book.category,
        })
      );
    }
  };

export default createReducer([], {
  addBook: (state, action) => {
    state.push({
      id: uuidv4(),
      title: action.payload.title,
      category: action.payload.category,
    });
  },
});
