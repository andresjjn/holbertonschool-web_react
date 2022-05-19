import React from 'react'
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);
describe("App component", () => {
  it('Header renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders a div with the class App-header', () => {
    expect(wrapper.find('div.App-header').exists()).toEqual(true);
  });
});
