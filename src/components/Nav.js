import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='navigation'>
        <h1>BookStore CMS</h1>
        <ul>
          <li>Books</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className='avatar-container'>
        <FontAwesomeIcon icon={faUser} color='blue' />
      </div>
    </div>
  );
};

export default Nav;
