import configureStore from 'redux-mock-store';
import { mount, configure } from 'enzyme';
import UserFormContainer from '../../containers/UserFormContainer';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('UserFormContainer tests', () => {

  it('container should have default state', () => {
    const mockStore = configureStore();
    const verifiedUser = {
      email: 'gizmo_da_corgi@doggos.com',
      password: 'stumper4lyfe' };
    const newUser = {
      name: 'Gizmo',
      email: 'gizmo_da_corgi@doggos.com',
      password: 'stumper4lyfe' };
    const store = mockStore( );
    const wrapper = mount(<UserFormContainer
      store={store}
      verifyUserLogin={verifiedUser}
      postUserSignUp={newUser}
    />);


    expect(wrapper.instance().props.verifyUserLogin).toEqual(verifiedUser);
  });
});
