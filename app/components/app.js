import React, { Component } from 'react';
import apiKeys from '../apiKeys';
import NavContainer from '../containers/NavContainer';
import PropTypes from 'prop-types';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchData(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        apiKeys.lukeApi}&language=en-US&page=1`);

  }

  componentDidUpdate(prevProps) {
    this.props.fetchFavorites(this.props.userId);
  }

  render() {
    return (
      <div>
        <h1>MovieTastic</h1>
        <NavContainer />
      </div>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func,
  fetchFavorites: PropTypes.func,
  userId: PropTypes.number
};
