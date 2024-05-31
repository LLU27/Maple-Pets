import React, { useState } from 'react'
import signupBG from '../../assets/Images/signup.png'
import { Link } from 'react-router-dom'
import logo from '../../assets/Images/logo.svg'

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
    <div className='bg-cover bg-center min-h-screen p-4 md:p-0 ' style={{ backgroundImage: `url(${signupBG})` }}>
      <div className='flex flex-col items-center justify-center lg:min-h-screen container mx-auto relative'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='lg:absolute lg:top-0 lg:left-0 p-4 hover:opacity-75' />
        </Link>
        <form
          onSubmit={handleFormSubmit}
          className='p-8 flex flex-col bg-white bg-opacity-90 rounded-2xl shadow-2xl w-[90%] sm:w-[75%] md:w-[50%] xl:w-[30%]'
        >
          <h1 className='text-center text-2xl md:text-3xl mb-4 font-[maplestory] text-gray-700 '>Sign Up</h1>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 '>First Name:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='text'
              name='firstName'
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 '>Last Name:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='text'
              name='lastName'
              value={userInfo.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 '>Email:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='email'
              name='email'
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2 '>Password:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              type='password'
              name='password'
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-4 items-center justify-between'>
            <button
              type='submit'
              className='bg-[#f68d12] border-2 px-10 py-2 font-bold lg:text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e] hover:scale-105 transform transition-transform duration-300 ease-in-out  w-full md:w-1/2'
            >
              Sign Up
            </button>
            <button type='button' onClick={toggleView} className='ml-4 text-[#f68d12] underline  hover:text-blue-400 transition-all'>
              Have an account already?
              <br></br>
              Login Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
