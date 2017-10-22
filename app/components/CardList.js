import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKeys from '../apiKeys';
import Card from './Card';
import Slider from 'react-slick';
import sliderOptions from './sliderOptions';



export default class CardList extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   // this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeys.lukeApi}&language=en-US&page=1`);
  // }

  // mapOverData() {
  //   this.props.items.results.map( result => {
  //     return (
  //       <Card title={result.title}/>
  //     )
  //   })
  // }

  render() {
    return (
      <div>
      	<Slider {...sliderOptions}>
		<div>1</div>
		<div>2</div>
		<div>3</div>
	</Slider>
        {
          Object.keys(this.props.items).length &&
          <div className="card-list-div">
	  
	  {this.props.items.results.map((result)=>{
            return(<Card movieData={result}/>)
          })}</div>
        }
      {/* {Object.keys(this.props.items).length ?
        <div>{this.mapOverData()}</div> : <div>nothing in here!</div> } */}
        <div>

        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  fetchData: PropTypes.func
};
