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
          <Link to='/' id='big-link'>
            <li id='books'>Books</li>
          </Link>
          <Link to='/categories' id='big-link'>
            <li>Categories</li>
          </Link>
        </ul>
      </div>
      <div className='Oval'>
        <div className='avatar-container'>
          <FontAwesomeIcon icon={faUser} color='#0290ff' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
