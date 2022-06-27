import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications'
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

let listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = { displayDrawer: false };
  }


  handleClick(e) {
    if (e.ctrlKey && e.key === "h") {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { displayDrawer } = this.state;
    return (
      <div className="App" >
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        {
          this.props.isLoggedIn === false
            ? <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
            : <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>
        }
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => void (0)
}

export default App;
