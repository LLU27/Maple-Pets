import React, { useState } from 'react'
import signupBG from '../assets/Images/signup.png'
import { Link } from 'react-router-dom'

const SignUp = ({ toggleView }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    if (!userInfo.email || !userInfo.firstName || !userInfo.lastName || !userInfo.password) {
      alert('Please fill in all fields.')
      return
    }
    console.log('email:', userInfo.email, 'password:', userInfo.password, 'firstName:', userInfo.firstName, 'lastName:', userInfo.lastName)
  }

  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${signupBG})` }}>
      <h2>Sign Up</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>First Name:</label>
          <input type='text' name='firstName' value={userInfo.firstName} onChange={handleChange} />
        </div>

        <div>
          <label>Last Name:</label>
          <input type='text' name='lastName' value={userInfo.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type='email' name='email' value={userInfo.email} onChange={handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type='password' name='password' value={userInfo.password} onChange={handleChange} />
        </div>
        <div className='flex'>
          <button
            type='submit'
            className='bg-[#f68d12] border-2 px-10 py-2 font-bold text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e] hover:scale-105 transform transition-transform duration-300 ease-in-out'
          >
            Sign Up
          </button>
          <button type='button' onClick={toggleView} className='ml-4 text-[#f68d12] underline'>
            Have an account already? Login Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
