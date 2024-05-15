import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Play = () => {
  const [isLogin, setIsLogin] = useState(true)
  const toggleView = () => {
    setIsLogin(prevIsLogin => !prevIsLogin);
  };
  
  return (
    <div>
      {isLogin ? (
        <Login toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
    </div>
  )
}

export default Play
