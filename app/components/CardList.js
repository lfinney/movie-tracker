import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKeys from '../apiKeys';
import Card from './Card';
import dataCleaner from '../helpers/dataCleaner';
import { fetchRemoveFavorite } from '../helpers/movieHelper'
import PromptContainer from '../containers/PromptContainer';
import { Redirect } from 'react-router-dom';

export default class CardList extends Component {
  constructor() {
    super();
  }
  render() {
console.log(fetchRemoveFavorite(),'render of cardlist' )
    return (
      <div>
        {
          Object.keys(this.props.items).length &&
          <div className="card-list-div">
            {
              this.props.dupFav &&
              <PromptContainer  className="login-error"/>
            }
            {this.props.items.results.map((result, index) => {
            return (<Card
              movieData={dataCleaner(result)}
              addToFavorites={this.props.addToFavorites}
              userId={this.props.userId}
              userFavArray={this.props.userFavArray}
	      removeFav={fetchRemoveFavorite}
	      type="home"
	      key={index}
	      />)
          })}
        </div>
        }
      </div>
    );
  }
}

CardList.propTypes = {
  fetchData: PropTypes.func,
  addToFavorites: PropTypes.func,
  userId: PropTypes.number,
  items: PropTypes.object,
  dupFav: PropTypes.bool
};
