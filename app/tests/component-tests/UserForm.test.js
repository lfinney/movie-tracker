import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../components/UserForm';

describe('UserForm', () => {

  it('should render component', () => {
    const mockFunc = jest.fn();
    const mockActiveUser = {
      id: 2,
      name: 'Edgar',
      password: 'catnip',
      email: 'edgar@thecat.com'
    };

    const wrapper = shallow(<UserForm
      activeUser={mockActiveUser}
      userLoginError='false'
      verifyUserLogin={mockFunc}
      postUserSignUp={mockFunc}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
