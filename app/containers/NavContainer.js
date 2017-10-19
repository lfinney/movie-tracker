import React from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { signUserOut } from '../actions';


const mapStateToProps = (store) => ({
  isLoggedIn: store.activeUser
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signUserOut({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
