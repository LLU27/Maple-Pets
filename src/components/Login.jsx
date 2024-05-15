import React, { useState } from 'react'
import signupBG from '../assets/Images/signup.png'

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
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${signupBG})` }}>
      <div className='flex justify-center items-center h-full'>
        <form onSubmit={handleFormSubmit} className='border border-blue-500 p-8 flex flex-col bg-white rounded-lg shadow-lg'>
          <h1 className='text-center text-3xl mb-6 font-maplestory'>Login</h1>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 font-maplestory'>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2 font-maplestory'>Password:</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  '
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-[#f68d12] border-2 px-10 py-2 font-bold text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e] hover:scale-105 transform transition-transform duration-300 ease-in-out font-maplestory'
            >
              Log In
            </button>
            <button type='button' onClick={toggleView} className='ml-4 text-[#f68d12] underline font-maplestory'>
              Don't have an account? Sign up now!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
