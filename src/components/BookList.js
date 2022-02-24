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

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      inputTitle: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    setForm({
      ...form,
      selectedValue: e.target.value,
      selectedText: e.target[index].innerHTML,
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
      category: form.selectedText,
    };
    dispatch(postBook(newBook));
  };

  return (
    <div className='book-list-container'>
      <div className='list'>
        {booksArray.map((books, index) => {
          return (
            <div className='Lesson-Panel' key={Object.keys(booksState)[index]}>
              <div className='populated-list'>
                <div className='author-info'>
                  <ul key={Object.keys(booksState)[index]}>
                    <li>{books[0].category}</li>
                    <li>{books[0].title}</li>
                  </ul>
                  <div className='buttons-below'>
                    <button>Comments</button>
                    <div class='Line-2'></div>
                    <button
                      onClick={(e) => remove(e.target.id)}
                      id={Object.keys(booksState)[index]}
                    >
                      Remove
                    </button>
                    <div class='Line-2'></div>
                    <button>Edit</button>
                  </div>
                </div>
                <div className='oval-container'>
                  <div class='Oval-2'></div>
                  <div className='percentage'>
                    <span class='-Percent-Complete'>100%</span>
                    <span class='Completed'>Completed</span>
                  </div>
                </div>
                <div className='chapter'>
                  <span class='Current-Chapter'>Current Chapter</span>
                  <span class='Current-Lesson'>Chapter 17</span>
                  <div class='Rectangle-2'>
                    <span class='Update-progress'>Update progress</span>
                  </div>
                </div>
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
          <select
            value={form.selectedValue}
            onChange={handleSelectChange}
            name='categories'
            id='categories'
            required
          >
            <option value='none' disabled>
              Category
            </option>
            <option value='education'>Fiction</option>
            <option value='history'>History</option>
            <option value='entertainment'>Humor and Entertainment</option>
            <option value='fantasy'>Economy</option>
          </select>
          <button type='submit' id='add-book'>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookList;
