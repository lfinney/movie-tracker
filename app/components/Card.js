import React from 'react';
import PropTypes from 'prop-types';
const dateFormat = require('dateformat');


const Card = ({
  movieData,
  addToFavorites,
  userId,
  userFavArray,
  removeFav,
  type }) => {

  return (
    <div
      className={ userFavArray.find( movie =>
        movie.movie_id === movieData.movie_id) ?
        "card-div favorite" : "card-div"}>
      <img
        src={movieData.poster_path}
        alt={`poster of ${movieData.title}`} />
      <img
        src="../styles/assets/fav-icon.svg"
        className="fav-icon"
        alt="fav-icon"/>
      <div className="card-text">
        <p className="title">{movieData.title}</p>
        <p className="date">{dateFormat(movieData.release_date, "longDate")}</p>
        <p>Avg. User Rating: {movieData.vote_average}</p>
        <p>{movieData.overview}</p>
        <button onClick={() =>
          addToFavorites(movieData, userId, userFavArray)}>Favorite</button>
        { type === "favs" &&
          <button onClick={() =>
            removeFav(userId, userFavArray.find( fav =>
              fav.title === movieData.title).movie_id)}>rm fav</button> }
      </div>
    </div>
  );
};

Card.propTypes = {
  movieData: PropTypes.object,
  userFavArray: PropTypes.array,
  addToFavorites: PropTypes.func,
  removeFav: PropTypes.func,
  type: PropTypes.string,
  userId: PropTypes.number
};

export default Card;
