import React from 'react';
import PropTypes from 'prop-types';

const dateFormat = require('dateformat');
// const now = new Date();


const Card = ({ movieData, addToFavorites, userId, userFavArray, removeFav, type }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`;
  const favoriteId = userFavArray.find( fav => fav.title === movieData.title).movie_id
	  console.log(favoriteId)
	  
  return (
    <div className={ userFavArray.find( movie => movie.movie_id === movieData.movie_id) ? "card-div favorite" : "card-div"}>
      <img src={movieData.poster_path} />
      <img src="../styles/assets/fav-icon.svg" className="fav-icon"/>
      <div className="card-text">
        <p className="title">{movieData.title}</p>
        <p className="date">{dateFormat(movieData.release_date, "longDate")}</p>
        <p>Avg. User Rating: {movieData.vote_average}</p>
        <p>{movieData.overview}</p>
        <button onClick={() => addToFavorites(movieData, userId, userFavArray)}>Favorite</button>
	{ type === "favs" && <button onClick={() => removeFav(userId, favoriteId)}>rm fav</button> }
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
