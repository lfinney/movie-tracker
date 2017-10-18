import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKeys from '../apiKeys'

export default class CardList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeys.lukeApi}&language=en-US&page=1`);
  }

  render() {
    return (
      <div>
      MOVIES
      </div>
    );
  }
}

CardList.propTypes = {
  fetchData: PropTypes.func
};
