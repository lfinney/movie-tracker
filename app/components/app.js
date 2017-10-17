import React, { Component } from 'react';
import { Route } from 'react-router';
import Nav from './Nav'
import CardListContainer from '../containers/CardListContainer';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <CardListContainer />
        <h1>Movie Watcher</h1>
        <h1>Movie Watcher</h1>
        <Route
          exact path='/favorites'
          render={()=><div>favs yo</div>}
        />
        <Route
          exact path='/login'
          render={()=><div>login ya punk!</div>}
        />
      </div>
    )
  }
}
