import React from 'react';
import favorites from '../components/favorites';
import { connect } from 'react-redux';
import { postToFavorites } from '../helpers/movieHelper';

const mapStateToProps = (store) => ({
//do we pass favorites in as a prop?
  favoriteItems: store.userFavArray,
  userFavArray: store.userFavArray
})

const mapDispatchToProps = (dispatch) => {
  return {
// or do we pass favorites in as a funtion?
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(favorites);
