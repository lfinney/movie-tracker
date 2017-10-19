import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('should render component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.length).toEqual(1);
  })
})
