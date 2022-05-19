import React from 'react'
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);
describe("App component", () => {
  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });
  it('renders a div with the class App-footer', () => {
    expect(wrapper.find('div.App-footer').exists()).toEqual(true);
  });
  it('renders a div with the class App-footer', () => {
    expect(wrapper.contains('Copyright'));
  });
});
