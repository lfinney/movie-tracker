import React from 'react';
import Prompt from '../components/Prompt';
import { connect } from 'react-redux';
import { resetLogin } from '../actions';


const mapStateToProps = (store) => ({
  userLoginError: store.userLoginError,
  dupFav: store.dupFav
});

const mapDispatchToProps = (dispatch) => {
  return {
    removePopup: () => dispatch(resetLogin(false))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);
