import React from 'react';
import UserForm from '../components/UserForm';
import { connect } from 'react-redux';
import { checkForUserHelper, addNewUserHelper } from '../helpers/userHelper';


const mapStateToProps = (store) => ({
  isLoggedIn: store
});

const mapDispatchToProps = (dispatch) => ({
  verifyUserLogin: (user) => dispatch(checkForUserHelper(user)),
  postUserSignUp: (user) => dispatch(addNewUserHelper(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
