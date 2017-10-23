import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import dataCleaner from '../helpers/dataCleaner';
import { fetchRemoveFavorite } from '../helpers/movieHelper';
import PromptContainer from '../containers/PromptContainer';
import { Redirect } from 'react-router-dom';

const CardList = ({
  items,
  hasErrored,
  isLoading,
  userId,
  userFavArray,
  dupFav,
  loginRequired,
  addToFavorites }) => {
  return (
    <div>
      {
        loginRequired &&
          <Redirect to="/login" />
      }
      {
        Object.keys(items).length &&
        <div className="card-list-div">
          {
            dupFav &&
            <PromptContainer  className="login-error"/>
          }
          {items.results.map((result, index) => {
            return (<Card
              movieData={dataCleaner(result)}
              addToFavorites={addToFavorites}
              userId={userId}
              userFavArray={userFavArray}
              removeFav={fetchRemoveFavorite}
              type="home"
              key={index}
            />);
          })}
        </div>
      }
    </div>
  );
};

CardList.propTypes = {
  addToFavorites: PropTypes.func,
  userId: PropTypes.number,
  items: PropTypes.object,
  dupFav: PropTypes.bool,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  userFavArray: PropTypes.array,
  loginRequired: PropTypes.bool
};

export default CardList;
