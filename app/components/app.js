import React, { Component } from 'react';
import { Route } from 'react-router';
import apiKeys from '../apiKeys';
import CardListContainer from '../containers/CardListContainer';
import NavContainer from '../containers/NavContainer';
import UserFormContainer from '../containers/UserFormContainer';


export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeys.lukeApi}&language=en-US&page=1`);

  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.props.fetchFavorites(this.props.userId);
    } else {
      console.log('aint got no shit');
    }
  }

  render() {
    return (
      <div>
        <h1>Im the App!</h1>
        <NavContainer />
      </div>
    );
  }
}
