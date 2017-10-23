import React from 'react';
import PropTypes from 'prop-types';

const Prompt = ({ removePopup, userLoginError, dupFav, removeDupPopup }) => {
  return (
    <div className="error-prompt">
      <h2>Whoops!</h2>
      { userLoginError &&
      <h3>Your username and password combination do not match our records.</h3>
      }
      { dupFav &&
        <h3>You already have that moive in your favorites.</h3>
      }
      <h3>Please try again.</h3>
      <button
        className="error-button"
        onClick={ (event) => {
          event.preventDefault();
          removePopup();
          removeDupPopup();
        }}>
        Try Again
      </button>

    </div>
  );
};

Prompt.propTypes = {
  removePopup: PropTypes.func,
  removeDupPopup: PropTypes.func,
  userLoginError: PropTypes.bool,
  dupFav: PropTypes.bool
};

export default Prompt;
