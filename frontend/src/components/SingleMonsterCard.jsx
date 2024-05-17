import React from 'react'

const SingleMonsterCard = ({monster}) => {
  return (
    <div className='shadow-lg rounded-lg bg-[#f68d12] p-1 md:p-2 w-[90%] lg:w-[25%] m-auto text-center text-white'>
      <h3 className='text-lg font-semibold mb-2'>{monster.name}</h3>
      <div className='bg-white p-2 h-48  flex justify-center items-center overflow-hidden rounded-md'>
        <img src={`https://maplestory.io/api/GMS/250/mob/${monster.id}/render/move`} alt={monster.name} className='m-auto' />
      </div>

      <div className='p-4'>
        <p className='text-lg'>Level {monster.meta.level}</p>
        <p className='text-sm'>Experience + {monster.meta.exp} </p>
      </div>
    </div>
  )
}

export default SingleMonsterCard
