import React from 'react'
import Nav from '../../Nav'
import playerbg from '../../../assets/Images/playerBG.png'
import MonsterCard from '../../MonsterCard'
const PlayerDash = () => {
  return (
    <>
      <Nav />
      <div className='bg-cover bg-center h-screen flex items-center justify-center' style={{ backgroundImage: `url(${playerbg})` }}>
        <MonsterCard />
      </div>
    </>
  )
}

export default PlayerDash
