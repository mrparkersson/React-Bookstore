import React from 'react';

const Book = () => {
  return (
    <div className='book-container'>
      <div className='addbook-container'>
        <h3>Add New Book</h3>
        <div className='addbook-buttons'>
          <input type='text' placeholder='Book title' />
          <button>add</button>
          <button>remove</button>

          <select name='selectList' id='selectList'>
            <option value='option 1' selected>
              Category
            </option>
            <option value='option 2'>Action</option>
            <option value='option 2'>Science Fiction</option>
            <option value='option 2'>Economy</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Book;
