import React from 'react'
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const wrapper = shallow(<CourseList />);
describe("CourseList component", () => {
  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });
});
