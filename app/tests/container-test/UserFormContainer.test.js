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

  // it('container should have default state', () => {
  //   const mockStore = configureStore()
  //   const intialState = { isLoggedIn: false }
  //   const store = mockStore(intialState)
  //   const wrapper = mount(<UserFormContainer
  //                             verifyUserLogin={store}
  //                             postUserSignUp={intialState}
  //                         />)


    // expect(wrapper.instance().props.todos).toEqual({ isLoggedIn: false });
  // });

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
