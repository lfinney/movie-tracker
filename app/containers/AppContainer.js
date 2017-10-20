
import React from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import { fetchCurrentMovies } from '../helpers/fetchMovieData';

const mapStateToProps = (store) => ({
  items: store.items,
  hasErrored: store.itemsHasErrored,
  isLoading: store.itemsIsLoading
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchCurrentMovies(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
