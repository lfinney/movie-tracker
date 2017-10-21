import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isLoggedIn, signOut }) => {
  return (
    <div id="nav-div">
      <Link to='/' className="left">
        Home
      </Link>
      <Link to='/favorites' className="left">
        Favorites
      </Link>
      <Link to='/login' className="right">
        Login
      </Link>

      <button onClick={signOut} className="right">Sign Out</button>
    </div>
  );
};

export default Nav;
