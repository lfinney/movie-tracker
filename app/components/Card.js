import React from 'react';
import PropTypes from 'prop-types';

const dateFormat = require('dateformat');
// const now = new Date();


const Card = ({ movieData, addToFavorites, userId }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;

  return (
    <div className="card-div">
      <img src={movieData.poster_path} />
      <div className="card-text">
        <p className="title">{movieData.title}</p>
        <p className="date">{dateFormat(movieData.release_date, "longDate")}</p>
        <p>Avg. User Rating: {movieData.vote_average}</p>
        <p>{movieData.overview}</p>
        <button onClick={() => addToFavorites(movieData, userId)}>Favorite</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  movieData: PropTypes.object,
  addToFavorites: PropTypes.func,
  userId: PropTypes.number
};

export default Card;
