import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Slider from 'react-slick';
import sliderOptions from './sliderOptions';
import dataCleaner from '../helpers/dataCleaner';
export default class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
console.log(this.props)
    return (
      <div>


         { this.props.favoriteItems.length &&
          <div className="card-list-div">
            {this.props.favoriteItems.map((item, index) => {
              return (<Card
                movieData={Object.assign({}, dataCleaner(item), { poster_path: item.poster_path })}
                userFavArray={this.props.userFavArray} 
		key={index}
                />)  
            })}
          </div>
        } 
      </div>
    );
  }
}

Favorites.propTypes = {
  fetchData: PropTypes.func,
  addToFavorites: PropTypes.func,
  userId: PropTypes.number,
  items: PropTypes.objectOf(PropTypes.object)
};
