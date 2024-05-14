import React from 'react'
import Nav from './Nav'
import homebg from '../assets/Images/home.png'
const Home = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${homebg})` }}>
      <Nav />
      
    </div>
  )
}

export default Home
