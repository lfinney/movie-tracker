import React from 'react';
import favorites from '../components/favorites';
import { connect } from 'react-redux';
import { postToFavorites, fetchRemoveFavorite } from '../helpers/movieHelper';

const mapStateToProps = (store) => ({
//do we pass favorites in as a prop?
  favoriteItems: store.userFavArray,
  userFavArray: store.userFavArray,
  userId: store.activeUser.id
})

const mapDispatchToProps = (dispatch) => {
  return {
// or do we pass favorites in as a funtion?/
	  removeFavorite: (userId, favoriteId) => dispatch(fetchRemoveFavorite(userId, favoriteId)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(favorites);
