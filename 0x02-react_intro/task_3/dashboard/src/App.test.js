import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
describe("App component", () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
  it('renders a div with the class App-header', () => {
    expect(wrapper.find('div.App-header').exists()).toEqual(true);
  });
  it('renders a div with the class App-body', () => {
    expect(wrapper.find('div.App-body').exists()).toEqual(true);
  });
  it('renders a div with the class App-footer', () => {
    expect(wrapper.find('div.App-footer').exists()).toEqual(true);
  });
});
