import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movieData }) => {

  const poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;

  return (
    <div>
      <p>{movieData.title}</p>
      <p><img src={poster} /></p>
      <p>{movieData.vote_average}</p>
      <p>{movieData.overview}</p>
      <p>{movieData.release_date}</p>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object
};

export default Card;
