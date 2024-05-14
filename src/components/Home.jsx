import React from 'react'
import Nav from './Nav'
import home from '../assets/Images/home.png'
const Home = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${home})` }}>
      <Nav />
    </div>
  )
}

export default Home
