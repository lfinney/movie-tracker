import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Slider from 'react-slick';
import sliderOptions from './sliderOptions';

export default class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.favoriteItems}

        {/* { Object.keys(this.props.items).length &&
          <div className="card-list-div">
            {this.props.items.results.map((result) => {
              return (<Card
                movieData={dataCleaner(result)}
                addToFavorites={this.props.addToFavorites}
                userId={this.props.userId}/>)
            })}
          </div>
        } */}
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
