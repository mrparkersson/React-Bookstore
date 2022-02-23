import { bookActions } from './bookslice';

export const removeBook = (id) => async (dispatch) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RRt5fcSZEcJzHK4WjGdg/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  dispatch(bookActions.removeBookItem(id));
};
