import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

describe('Card', () => {

  it('should render component', () => {
    const mockMovData = {
       movie_id: 346364,
       overview: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
       poster_path: "https://image.tmdb.org/t/p/w500//9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
       release_date: "2017-09-05",
       title: "It",
       vote_average: 7.4
   }
    const mockUserFavArray = [
{
       movie_id: 346364,
       id: 12,
       user_id: 2,
       overview: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
       poster_path: "https://image.tmdb.org/t/p/w500//9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
       release_date: "2017-09-05",
       title: "It",
       vote_average: 7.4
   }
    ]
	  
    const wrapper = shallow(<Card
		   	movieData={mockMovData}
			addToFavorites={jest.fn()}
			userId='2'
			userFavArray={mockUserFavArray}
			removeFav={jest.fn()}
			type='home'
			key='1'
		    />);

    expect(wrapper).toMatchSnapshot();
  });
});
