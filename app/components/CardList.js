import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={()=>this.props.fetchMovieData()}>
      MOVIES
      </div>
    );
  }
}

CardList.propTypes = {
  fetchMovieData: PropTypes.func
};
