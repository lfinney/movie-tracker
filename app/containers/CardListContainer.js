import React from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { fetchCurrentMovies } from '../helpers/fetchMovieData';
import { fetchData } from '../actions'

const resultOfFetchCurrentMovies = fetchCurrentMovies();

const mapStateToProps = (store) => ({
  titles: store.titles
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieData: ()=>{dispatch(fetchData(resultOfFetchCurrentMovies))}
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
