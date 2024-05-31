import React from 'react'
import gif from '../../../public/move.gif'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[#333333]'>
      <img src={gif} alt='Loading...' />
      <p className='text-white md:text-lg'>Loading...</p>
    </div>
  )
}

export default Loading
