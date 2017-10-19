import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isLoggedIn, signOut }) => {
  return (
    <div>
      <Link to='/'>
        Home
      </Link>
      <Link to='/login'>
        Login
      </Link>
      <Link to='/favorites'>
        Favorites
      </Link>
      {
        !Object.keys(isLoggedIn).length
        ?
        <div>
          you are not logged in ya punk
        </div>
        :
        <div>
          You are logged in hehe
        </div>
      }
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Nav;
