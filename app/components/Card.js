import React from 'react';
import PropTypes from 'prop-types';

const dateFormat = require('dateformat');
// const now = new Date();


const Card = ({ movieData }) => {

  const poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;

  return (
    <div className="card-div">
      <p>{movieData.title}</p>
      <img src={poster} />
      <p>{movieData.vote_average}</p>
      <p>{movieData.overview}</p>
      <p>{dateFormat(movieData.release_date, "longDate")}</p>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object
};

export default Card;
