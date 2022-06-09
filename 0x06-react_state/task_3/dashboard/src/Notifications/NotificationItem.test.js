import React from 'react'
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<NotificationItem type="default" />);
describe("Notifications component", () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" />);
  });
});
