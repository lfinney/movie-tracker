import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

describe('Card', () => {

  it('should render component', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});
