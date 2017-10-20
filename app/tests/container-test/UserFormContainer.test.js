import configureStore from 'redux-mock-store';
import { shallow, mount, configure } from 'enzyme'
import { mapStateToProps, mapDispatchToProps } from '../../containers/UserFormContainer'
import UserFormContainer from '../../containers/UserFormContainer'
import UserForm from '../../components/UserForm'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../../actions'

configure({ adapter: new Adapter() })

describe('UserFormContainer tests', () => {

  it('container should have default state', () => {
    const mockStore = configureStore();
    const mockFunc = jest.fn();
    const verifiedUser = {
      email: 'gizmo_da_corgi@doggos.com',
      password: 'stumper4lyfe' };
    const newUser = {
      name: 'Gizmo',
      email: 'gizmo_da_corgi@doggos.com',
      password: 'stumper4lyfe' };
    const store = mockStore(verifiedUser);
    const wrapper = mount(<UserFormContainer
                              store={store}
                              verifyUserLogin={verifiedUser}
                              postUserSignUp={newUser}
                          />)


    expect(wrapper.instance().props.verifyUserLogin).toEqual(verifiedUser);
  });

  // it('the rendered component should fire correct action', () => {
  //   const mockStore = configureStore()
  //   const intialState = { todos: [] }
  //   const store = mockStore(intialState)
  //   const mockHandleSubmit = jest.fn()
  //   const wrapper = mount(<UserForm
  //                             store={store}
  //                             todos={intialState}
  //                             handleSubmit={mockHandleSubmit}
  //                           />)
  //   wrapper.find('.submit').simulate('submit')
  //   expect(mockHandleSubmit).toHaveBeenCalled()
  // })

});
