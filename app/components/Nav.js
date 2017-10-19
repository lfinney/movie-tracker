import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  console.log(props);
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
        !Object.keys(props.isLoggedIn).length
        ?
        <div>
          you are not logged in ya punk
        </div>
        :
        <div>
          You are logged in hehe
        </div>
      }
    </div>
  );
};

export default Nav;
