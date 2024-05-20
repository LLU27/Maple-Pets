import React from 'react'

const MonsterCard = ({ mob }) => {
  return (
    <div
      className='
      shadow-lg rounded-lg bg-[#f68d12] p-1 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl
    '
    >
      <div className='flex justify-between px-2'>
        <h3 className='text-lg font-semibold mb-2 text-white'>{mob.name}</h3>
        <p className='text-white'>Level {mob.level}</p>
      </div>

      <div className='bg-white p-2 h-48 flex justify-center items-center overflow-hidden rounded-md'>
        {/* Set a fixed height for the image container */}
        <img
          src={`https://maplestory.io/api/GMS/250/mob/${mob.id}/icon`}
          alt={mob.name}
          className=' ' // Ensure the image fits within the container
        />
      </div>
      <div>{mob.isBoss ? <p>Boss</p> : null}</div>
    </div>
  )
}

export default MonsterCard
