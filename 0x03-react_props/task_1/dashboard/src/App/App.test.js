import React from 'react'
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

const wrapper = shallow(<App />);
describe("App component", () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
  it('Header renders without crashing', () => {
    shallow(<Header />);
  });
  it('Login renders without crashing', () => {
    shallow(<Login />);
  });
  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });
});
