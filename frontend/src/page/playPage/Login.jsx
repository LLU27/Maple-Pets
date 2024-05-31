import React, { useState } from 'react'
import signupBG from '../../assets/Images/signup.png'
import logo from '../../assets/Images/logo.svg'
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

    // Implement login logic here
    console.log('email:', email, 'password:', password)
  }

  return (
    <div className='bg-cover bg-center min-h-screen p-4 md:p-0 ' style={{ backgroundImage: `url(${signupBG})` }}>
      <div className='flex flex-col items-center justify-center lg:min-h-screen container mx-auto relative'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='lg:absolute lg:top-0 lg:left-0 p-4 hover:opacity-75' />
        </Link>

        <form
          onSubmit={handleFormSubmit}
          className=' p-8 flex flex-col bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[75%] md:w-[50%] xl:w-[30%] bg-opacity-90'
        >
          <h1 className='text-center text-2xl md:text-3xl mb-4 font-[maplestory] text-gray-700'>Login</h1>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 '>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2 '>Password:</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight'
            />
          </div>

          <div className='flex flex-col gap-4 items-center justify-between'>
            <button
              type='submit'
              className='bg-[#f68d12] border-2 px-10 py-2 font-bold lg:text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e] hover:scale-105 transform transition-transform duration-300 ease-in-out  w-full md:w-1/2'
            >
              Log In
            </button>
            <button type='button' onClick={toggleView} className='ml-4 text-[#f68d12] underline  hover:text-blue-400 transition-all '>
              Don't have an account? Sign up now!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
