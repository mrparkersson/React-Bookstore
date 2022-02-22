import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='navigation'>
        <h1>BookStore CMS</h1>
        <ul>
          <Link to='/books'>
            <li>Books</li>
          </Link>
          <Link to='/categories'>
            <li>Categories</li>
          </Link>
        </ul>
      </div>
      <div className='avatar-container'>
        <FontAwesomeIcon icon={faUser} color='blue' />
      </div>
    </div>
  );
};

export default Nav;
