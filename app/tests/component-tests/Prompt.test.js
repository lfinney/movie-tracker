import React from 'react';
import { shallow } from 'enzyme';
import Prompt from '../../components/Prompt';

describe('Prompt', () => {

  it('should render component', () => {
    const wrapper = shallow(<Prompt />);

    expect(wrapper).toMatchSnapshot();
  });
});
