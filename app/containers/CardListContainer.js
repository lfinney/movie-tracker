import React from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { fetchCurrentMovies } from '../helpers/fetchMovieData';

const resultOfFetchCurrentMovies = fetchCurrentMovies();

const mapStateToProps = (store) => ({
  // titles: store.results.titles,
  items: store.items,
  hasErrored: store.itemsHasErrored,
  isLoading: store.itemsIsLoading
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchCurrentMovies(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
