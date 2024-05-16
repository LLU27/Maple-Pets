import React, { useEffect, useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import PlayerDash from './PlayerDash'
const Play = () => {
  const [isLogin, setLogin] = useState(true)
  const [isAuth, setAuth] = useState(false)

  const toggleView = () => {
    setLogin(prevIsLogin => !prevIsLogin)
  }

  useEffect(() => {
    // Simulate checking user authentication status
    const isAuthenticated = true
    setAuth(isAuthenticated)
  }, [])

  return <div>{isAuth ? <PlayerDash /> : isLogin ? <Login toggleView={toggleView} /> : <SignUp toggleView={toggleView} />}</div>
}

export default Play
