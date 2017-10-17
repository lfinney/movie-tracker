import React from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  titles: store.titles
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
