import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import CardListContainer from '../containers/CardListContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import UserFormContainer from '../containers/UserFormContainer';

const Routes = ({ currentPath }) => {

  return (
    <div>
      <Route path='/' component={AppContainer} />
      <Route exact path='/' component={CardListContainer} />
      <Route exact path='/favorites' component={FavoritesContainer} />
      <Route exact path='/login' component={UserFormContainer} />


      {/* <h1>
        MovieTastic!
      </h1>
      <div id="nav-div">
        <NavLink to='/' className="left" onClick={(event) => {
          event.preventDefault();
          currentPath('/')}
        }>
          Home
        </NavLink>
        <NavLink to='/favorites' className="left" onClick={(event) => {
          event.preventDefault();
          currentPath('/favorites')}
        }>
          Favorites
        </NavLink>
        <NavLink to='/login' className="right" onClick={(event) => {
          event.preventDefault();
          currentPath('/login')}
        }>
          Login
        </NavLink>
        <button onClick={signOut} className="right">Sign Out</button>
      </div>
      <NavContainer /> */}
    </div>
  );
};

Routes.propTypes = {
  movieData: PropTypes.object,
  addToFavorites: PropTypes.func,
  userId: PropTypes.number
};

export default Routes;
