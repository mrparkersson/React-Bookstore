import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/apislice';
import { removeBook } from '../redux/removebook';

const BookList = () => {
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.book.items);
  const deleteBook = (e) => {
    const targetId = e.target.id;
    dispatch(removeBook(targetId));
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const { title, category } = e.target.elements;
    dispatch(
      addBook({
        title: title.value,
        category: category.value,
      })
    );

    title.value = '';
    category.value = '';
  };

  return (
    <div className='book-list-container'>
      <div className='list'>
        <form onSubmit={addBookHandler}>
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
