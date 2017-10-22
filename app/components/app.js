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

  render() {
    return (
      <div>
        <h1 getFavorites={this.props.getFavorites(this.props.userId)}>MovieTastic!</h1>
	<NavContainer />
 	<Route exact path='/'
	  render={()=><CardListContainer />}
	/>
        <Route
          exact path='/favorites'
          render={()=><div>favs yo</div>}
        />
        <Route
          exact path='/login'
          component={UserFormContainer}
        />
      </div>
    );
  }
}
