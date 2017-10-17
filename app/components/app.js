import React, { Component } from 'react';
import CardList from './CardList';
import { fetchCurrentMovies } from '../helpers/fetchMovieData'


export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetchCurrentMovies();
  }

  render() {
    return (
      <div>
        <CardList />
        <h1>Movie Watcher</h1>
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
