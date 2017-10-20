import React from 'react';
import PropTypes from 'prop-types';

const dateFormat = require('dateformat');
// const now = new Date();


const Card = ({ movieData, addToFavorites }) => {

  const poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;

  return (
    <div className="card-div">
      <img src={poster} />
      <div className="card-text">
        <p className="title">{movieData.title}</p>
        <p className="date">{dateFormat(movieData.release_date, "longDate")}</p>
        <p>Avg. User Rating: {movieData.vote_average}</p>
        <p>{movieData.overview}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object
};

export default Card;
