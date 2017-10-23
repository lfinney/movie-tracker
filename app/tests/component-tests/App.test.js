import React from 'react';
import App from '../../components/App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should render component', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <App fetchData={mockFunc} />);

    expect(wrapper.length).toEqual(1);
  });
});
