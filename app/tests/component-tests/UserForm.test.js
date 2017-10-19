import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../components/UserForm';

describe('UserForm', () => {

  it('should render component', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<UserForm/>);

    expect(wrapper).toMatchSnapshot();
  });
});
