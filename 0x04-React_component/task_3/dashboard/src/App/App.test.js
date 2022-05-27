import React from 'react'
import App from './App';
import { shallow, mount } from "enzyme";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

const wrapper = shallow(<App />);
describe("App component", () => {
  it('App renders without crashing', () => {
    expect(shallow(<App />).exists()).toEqual(true);
  });
  it('Header renders without crashing', () => {
    expect(shallow(<Header />).exists()).toEqual(true);
  });
  it('Header renders without crashing', () => {
    expect(shallow(<Login />).exists()).toEqual(true);

  });
  it('Header renders without crashing', () => {
    expect(shallow(<Footer />).exists()).toEqual(true);

  });
});
