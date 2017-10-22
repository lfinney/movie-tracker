import React from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { postToFavorites } from '../helpers/movieHelper';

const mapStateToProps = (store) => ({
  items: store.items,
  hasErrored: store.itemsHasErrored,
  isLoading: store.itemsIsLoading,
  userId: store.activeUser.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (movieCard, userId) => dispatch(postToFavorites(movieCard, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
