import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../../components/CardList';

describe('CardList', () => {

  it('should render component', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<CardList
      addToFavorites={mockFunc}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
