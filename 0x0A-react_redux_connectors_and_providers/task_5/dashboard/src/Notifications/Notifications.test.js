import React from 'react'
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);
describe("Notifications component", () => {
  it('renders without crashingy', () => {
    shallow(<Notifications />);
  });
  /*   it('renders three list items', () => {
      expect(wrapper.find('ul').children().length).toEqual(3);
    }); */
  /* it('renders the text Here is the list of notifications', () => {
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
  }); */
  it("handleDisplayDrawer", () => {

  });

  it("handleHideDrawer", () => {

  });
});
