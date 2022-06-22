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
  it('render h1 tag', () => {
    expect(wrapper.find('h1').exists()).toEqual(true);
  });
  it('render img tag', () => {
    expect(wrapper.find('img').exists()).toEqual(true);
  });
});
