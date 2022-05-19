import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Header />
      {
        isLoggedIn === false
          ? <Login />
          : <div className="App-body"><CourseList /></div>
      }
      <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: true,
}

export default App;
