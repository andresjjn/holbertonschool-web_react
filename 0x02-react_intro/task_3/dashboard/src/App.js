import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils"
import Notifications from "./Notifications"

function App() {
  return (
    <div className="App">
      <Notifications />
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form className="">
          <label htmlFor="email"><strong>Email: </strong></label>
          <input id="email" type="email" name="email" />
          <label htmlFor="password"><strong>Password: </strong></label>
          <input id="password" type="password" name="password" />
          <input type="submit" value="OK" />
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
