import React from 'react';
import Prompt from '../components/Prompt';
import { connect } from 'react-redux';
import { resetLogin } from '../actions';


// const mapStateToProps = (store) => ({
// });

const mapDispatchToProps = (dispatch) => {
  return {
    removePopup: () => dispatch(resetLogin(false))
  };
};

export default connect(null, mapDispatchToProps)(Prompt);
