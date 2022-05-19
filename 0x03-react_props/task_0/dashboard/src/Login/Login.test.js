import React from 'react'
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);
describe("Login component", () => {
  it('Login renders without crashing', () => {
    shallow(<Login />);
  });
  it('renders a div with the class App-body', () => {
    expect(wrapper.find('div.App-body').exists()).toEqual(true);
  });
});
