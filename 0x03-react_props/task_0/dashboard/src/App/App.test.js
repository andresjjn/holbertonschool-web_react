import React from 'react'
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
describe("App component", () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
});
