import React from 'react';
import PropTypes from 'prop-types';

const Prompt = ({ removePopup }) => {
  return (
    <div className="error-prompt">
      <h2>Whoops!</h2>
      <h3>Your username and password combination do not match our records.</h3>
      <h3>Please try again.</h3>
      <button
        className="error-button"
        onClick={ (event) => {
          event.preventDefault();
          removePopup();
        }}>
        Try Again
      </button>

    </div>
  );
};

Prompt.propTypes = {
  removePopup: PropTypes.func
};

export default Prompt;
