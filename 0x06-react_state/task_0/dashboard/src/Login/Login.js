import React from 'react'
import './Login.css'

function Login() {
  return (
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
  )
}

export default Login
