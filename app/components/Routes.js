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
    </div>
  );
};

Routes.propTypes = {
  movieData: PropTypes.object,
  addToFavorites: PropTypes.func,
  userId: PropTypes.number,
  currentPath: PropTypes.string
};

export default Routes;
