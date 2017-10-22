import React from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { signUserOut, clearFavArray } from '../actions';


const mapStateToProps = (store) => ({
  isLoggedIn: store.activeUser
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signUserOut({})),
  clearFavs: () => dispatch(clearFavArray([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
