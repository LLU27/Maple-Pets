import React, { useState } from 'react'
import signupBG from '../assets/Images/signup.png'
import { Link } from 'react-router-dom'

const Login = ({ toggleView }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please fill in both fields.')
      return
    }
    console.log('email:', email, 'password:', password)
  }

  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${signupBG})` }}>
      <h2>Login</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Password:</label>
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='flex'>
          <button
            type='submit'
            className='bg-[#f68d12] border-2 px-10 py-2 font-bold text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e] hover:scale-105 transform transition-transform duration-300 ease-in-out'
          >
            Log In
          </button>
          <button type='button' onClick={toggleView} className='ml-4 text-[#f68d12] underline'>
            Don't have an account? Sign up now!
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
