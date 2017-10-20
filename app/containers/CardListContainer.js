import React from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { postToFavorites } from '../helpers/movieHelper';

const mapStateToProps = (store) => ({
  items: store.items,
  hasErrored: store.itemsHasErrored,
  isLoading: store.itemsIsLoading
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (movieCard) => dispatch(postToFavorites(movieCard))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
