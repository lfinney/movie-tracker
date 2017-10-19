import React from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  isLoggedIn: store.activeUser
});

export default connect(mapStateToProps)(Nav);
