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
      <div className='flex justify-center items-center h-full'>
        <form onSubmit={handleFormSubmit} className='border border-blue-500 p-8 flex flex-col bg-white rounded-lg shadow-lg'>
          <h1 className='text-center text-3xl mb-6 font-maplestory'>Sign Up</h1>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 font-maplestory'>First Name:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='text'
              name='firstName'
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 font-maplestory'>Last Name:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight font-maplestory'
              type='text'
              name='lastName'
              value={userInfo.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 font-maplestory'>Email:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='email'
              name='email'
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 font-maplestory'>Password:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='password'
              name='password'
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className='flex'>
            <button
              type='submit'
              className='bg-[#f68d12] border-2 px-10 py-2 font-bold text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e] hover:scale-105 transform transition-transform duration-300 ease-in-out font-maplestory'
            >
              Sign Up
            </button>
            <button type='button' onClick={toggleView} className='ml-4 text-[#f68d12] underline font-maplestory'>
              Have an account already? Login Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
