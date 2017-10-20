import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../components/Nav';

describe('Nav', () => {

  it('should render component', () => {
    const mockUser = {
      email: 'gizmo_da_corgi@doggos.com',
      password: 'stumper4lyfe'
    };

    const wrapper = shallow(
      <Nav isLoggedIn={[mockUser]}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
