import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../redux/render';
import { v4 as uuidv4 } from 'uuid';
import { removeBook } from '../redux/render';

const BookList = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state) => state.bookReducer.books);
  const booksArray = Object.values(booksState);
  const [form, setForm] = useState({
    inputTitle: '',
    selectedValue: 'none',
    selectedText: '',
  });
  const [category, setCategory] = useState({
    inputCategory: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      inputTitle: e.target.value,
    });
  };

  const categoryChangeHandler = (e) => {
    setCategory({
      ...category,
      inputCategory: e.target.value,
    });
  };

  const remove = (id) => {
    dispatch(removeBook(id));
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: form.inputTitle,
      category: category.inputCategory,
    };
    dispatch(postBook(newBook));
  };

  return (
    <div className='book-list-container'>
      <div className='list'>
        {booksArray.map((books, index) => {
          return (
            <div className='book-list' key={Object.keys(booksState)[index]}>
              <div className='populated-list'>
                <ul key={Object.keys(booksState)[index]}>
                  <li>{books[0].category}</li>
                  <li>{books[0].title}</li>
                </ul>
                <button
                  onClick={(e) => remove(e.target.id)}
                  id={Object.keys(booksState)[index]}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
        <form onSubmit={(e) => submitBookToStore(e)}>
          <h3>Add New Book</h3>

          <input
            type='text'
            id='book'
            placeholder='Book title'
            value={form.inputTitle}
            onChange={handleTitleChange}
            required
          />
          <input
            type='text'
            id='category'
            placeholder='Book title'
            value={category.inputCategory}
            onChange={categoryChangeHandler}
            required
          />
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
