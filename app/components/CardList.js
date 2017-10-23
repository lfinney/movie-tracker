import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKeys from '../apiKeys';
import Card from './Card';
import Slider from 'react-slick';
import sliderOptions from './sliderOptions';
import dataCleaner from '../helpers/dataCleaner';
import { fetchRemoveFavorite } from '../helpers/movieHelper'
import PromptContainer from '../containers/PromptContainer';

export default class CardList extends Component {
  constructor() {
    super();
  }
  render() {
console.log(fetchRemoveFavorite(),'render of cardlist' )
    return (
      <div>
        <Slider {...sliderOptions}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Slider>
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
