import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookList = () => {
  const ListOfBooks = [
    {
      id: uuidv4(),
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },

    {
      id: uuidv4(),
      genre: 'Science Fiction ',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className='book-list-container'>
      <div className='list'>
        {ListOfBooks.map((book) => {
          return (
            <div className='book-list'>
              <ul key={book.id}>
                <li>{book.genre}</li>
                <li>{book.title}</li>
                <li>{book.author}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
