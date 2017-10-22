import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Nav.propTypes = {
  isLoggedIn: PropTypes.object,
  signOut: PropTypes.func
};

export default Nav;
