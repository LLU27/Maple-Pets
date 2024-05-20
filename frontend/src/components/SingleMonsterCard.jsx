import React, { useState } from 'react'

const SingleMonsterCard = ({ monster }) => {
  const [isMoving, setIsMoving] = useState(false)

  const toggleAnimation = () => {
    setIsMoving(!isMoving)
  }

  return (
    <div className='shadow-lg rounded-lg bg-[#f68d12] p-1 md:p-2 w-[90%] md:w-[50%] lg:w-[25%] m-auto text-center text-white'>
      <div className='flex justify-between px-2'>
        <h3 className='text-lg font-semibold mb-2 text-white'>{monster.name}</h3>
        <p className='text-white'>Level {monster.meta.level}</p>
      </div>

      <div className='bg-white p-2 h-48 flex justify-center items-center overflow-hidden rounded-md'>
        <img
          src={`https://maplestory.io/api/GMS/250/mob/${monster.id}/render/${isMoving ? 'move' : 'stand'}`}
          alt={monster.name}
          className='m-auto'
        />
      </div>

      <div className='p-4'>
        <p className='text-sm'>Experience + {monster.meta.exp}</p>
        <button className='mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded' onClick={toggleAnimation}>
          {isMoving ? 'Stand ' : 'Move '}
        </button>
      </div>
    </div>
  )
}

export default SingleMonsterCard
