/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { login, signup, guestLogin } from '../../firebase'
import '../../style/Login.css'
function Login(props) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleClick = (event) => {
    event.preventDefault()

    const authPromise = isLogin ? login(email, password) : signup(email, password)

    authPromise
      .then((user) => {
        console.log(user)
        if (user) {
          props.isSignedIn(true)
        } else {
          console.log('Authentication failed')
        }
      })
      .catch((error) => {
        console.error('Authentication failed:', error)
      })
  }
  const HandleClickGuest = () => {
    const authPromise = guestLogin()
    authPromise.then((sucesss) => {
      if (sucesss) {
        props.isSignedIn(true)
      }
    })
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <p className="login-description">Please enter your credentials to login.</p>
      <form className="login-form" onSubmit={HandleClick}>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-submit" type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button className="login-submit" onClick={HandleClickGuest}>
        Use as Guest
      </button>
      <button className="login-toggle-button" onClick={toggleMode}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  )
}

export default Login
