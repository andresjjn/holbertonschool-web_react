import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications'

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
  render() {
    return (
      <div className="App" >
        <Notifications listNotifications={listNotifications} />
        <Header />
        {
          this.props.isLoggedIn === false
            ? <Login />
            : <div className="App-body"><CourseList listCourses={listCourses} /></div>
        }
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: true,
}

export default App;
