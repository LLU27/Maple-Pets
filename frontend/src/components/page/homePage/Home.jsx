import React from 'react'
import Nav from '../../Nav'
import homebg from '../../../assets/Images/home.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Nav />
      <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${homebg})` }}>
        <div className=' container mx-auto flex items-center justify-center'>
          <div className='absolute top-[20%] w-full text-center p-2'>
            <h1 className='text-6xl lg:text-7xl font-bold text-center text-[#f68d12] custom-stroke'>Welcome to Maple Pets</h1>
            <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center text-white mt-8'>
              Join the Fun, Make Friends, and Explore Enchanting Creatures.
            </h2>
            <Link to='/play'>
              <button className='bg-[#f68d12] border-2 px-10 py-2 font-bold text-2xl lg:text-3xl text-white rounded-[5rem] hover:bg-[#e07a0e]  hover:scale-110 transform transition-transform duration-300 ease-in-out mt-8'>
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
