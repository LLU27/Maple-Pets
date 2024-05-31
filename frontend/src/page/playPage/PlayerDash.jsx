import React from 'react'
import Nav from '../../components/Nav'
import playerbg from '../../assets/Images/playerBG.png'
const PlayerDash = () => {
  return (
    <div>
      <Nav />
      <div className='bg-cover bg-center h-screen flex items-center justify-center ' style={{ backgroundImage: `url(${playerbg})` }}>
      </div>
    </div>
  )
}

export default PlayerDash
