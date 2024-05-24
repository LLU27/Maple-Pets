import React, { useState, useEffect, useRef } from 'react'

const SingleMonsterCard = ({ monsterData }) => {
  const { monster, location, bgm, bgmUrl } = monsterData
  console.log(monsterData)
  const [isMoving, setIsMoving] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current && bgm) {
      audioRef.current.play()
    }
  }, [bgm])

  const toggleAnimation = () => {
    setIsMoving(!isMoving)
  }

  return (
    <div className='shadow-lg rounded-lg bg-[#f68d12] p-4 w-[90%] md:w-[50%] lg:w-[30%] m-auto text-center text-white'>
      <div className='flex justify-between items-center mb-4 px-4'>
        <h3 className='text-lg font-semibold'>{monster.name}</h3>
        <p className='text-sm'>Level {monster.meta.level}</p>
      </div>

      <div className='bg-white p-4 h-48 flex justify-center items-center overflow-hidden rounded-md mb-4'>
        <img
          src={`https://maplestory.io/api/GMS/250/mob/${monster.id}/render/${isMoving ? 'move' : 'stand'}`}
          alt={monster.name}
          className='m-auto'
        />
      </div>

      <div className='px-4'>
        <p className='text-sm mb-2'>Health: {monster.meta.maxHP}</p>
        <p className='text-sm mb-2'>Damage: {monster.meta.physicalDamage}</p>
        <p className='text-sm mb-2'>Experience: {monster.meta.exp}</p>
        <p className='text-sm mb-2'>Summon Type: {monster.meta.summonType}</p>
        {location && (
          <p className='text-sm mb-2'>
            Found at: {location.name} - {location.streetName}
          </p>
        )}

        <div className='my-4'>
          <p className='text-sm mb-2'>Background Music: {location.bgm}</p>
          <audio ref={audioRef} controls src={location.bgmUrl} loop autoPlay className='w-full'>
            Your browser does not support the audio element.
          </audio>
        </div>

        <button className='mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded w-full' onClick={toggleAnimation}>
          {isMoving ? 'Stand' : 'Move Animation'}
        </button>
      </div>
    </div>
  )
}

export default SingleMonsterCard
