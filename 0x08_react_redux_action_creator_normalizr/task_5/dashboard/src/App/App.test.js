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
  it("State for displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it("displayDrawer state changes to true", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer state changes to false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});
