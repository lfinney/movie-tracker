import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title }) => {
  return (
    <div>
    {title}
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object
};

export default Card;
