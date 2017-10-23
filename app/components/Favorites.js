import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Slider from 'react-slick';
import sliderOptions from './sliderOptions';
import dataCleaner from '../helpers/dataCleaner';

const Favorites = ({ favoriteItems, userFavArray, userId, removeFavorite }) => {
  return (
    <div>
      <div className="favorites-div">
        <Slider {...sliderOptions}>
          {favoriteItems.map((item, index) => {
            return (<Card
              movieData={Object.assign({},
                dataCleaner(item),
                { poster_path: item.poster_path })}
              userFavArray={userFavArray}
              removeFav={removeFavorite}
              userId={userId}
              type="favs"
              key={index}
            />);
          })}
        </Slider>
      </div>
      { favoriteItems.length &&
        <div className="card-list-div">
          {favoriteItems.map((item, index) => {
            return (<Card
              movieData={Object.assign({},
                dataCleaner(item),
                { poster_path: item.poster_path })}
              userFavArray={userFavArray}
              removeFav={removeFavorite}
              userId={userId}
              type="favs"
              key={index}
            />);
          })}
        </div>
      }
    </div>
  );
};

Favorites.propTypes = {
  fetchData: PropTypes.func,
  addToFavorites: PropTypes.func,
  removeFavorite: PropTypes.func,
  userId: PropTypes.number,
  favoriteItems: PropTypes.array,
  userFavArray: PropTypes.array,
  items: PropTypes.objectOf(PropTypes.object)
};

export default Favorites;
