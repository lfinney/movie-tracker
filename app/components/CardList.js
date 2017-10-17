import React, { Component } from 'react';

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
