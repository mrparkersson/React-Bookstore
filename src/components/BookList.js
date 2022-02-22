import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from '../redux/bookslice';

const BookList = () => {
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.book.items);

  const deleteBook = (e) => {
    const targetId = e.target.id;
    dispatch(bookActions.removeBookItem(targetId));
  };

  const addBook = (e) => {
    e.preventDefault();
    const { title, category } = e.target.elements;
    dispatch(
      bookActions.addBookItem({
        title: title.value,
        category: category.value,
      })
    );
  };

  return (
    <div className='book-list-container'>
      <div className='list'>
        <form onSubmit={addBook}>
          {booklist.map((book) => {
            return (
              <div className='book-list' key={book.id}>
                <div className='populated-list'>
                  <ul key={book.id}>
                    <li>{book.category}</li>
                    <li>{book.title}</li>
                  </ul>
                  <button onClick={deleteBook} id={book.id}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
          <h3>Add New Book</h3>

          <input type='text' placeholder='Book title' name='title' required />
          <input type='text' placeholder='category' name='category' required />
          <button type='submit'>add</button>
          <select name='selectList' id='selectList' defaultValue='Categories'>
            <option value='option 1'>Category</option>
            <option value='option 2'>Action</option>
            <option value='option 2'>Science Fiction</option>
            <option value='option 2'>Economy</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default BookList;
