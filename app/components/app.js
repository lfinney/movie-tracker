import React, { Component } from 'react';
import { Route } from 'react-router';
import CardListContainer from '../containers/CardListContainer';
import NavContainer from '../containers/NavContainer';
import UserFormContainer from '../containers/UserFormContainer';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavContainer />
        <UserFormContainer />
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
    );
  }
}
