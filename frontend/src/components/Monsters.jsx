import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MonsterCard from './MonsterCard'

const Monsters = () => {
  const [mobs, setMobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchVal, setSearchVal] = useState('')
  const [debouncedSearchVal, setDebouncedSearchVal] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)

  const fetchMobs = async () => {
    try {
      const { data } = await axios.get('https://maplestory.io/api/GMS/250/mob')
      const limitedMobs = data.slice(0, 10)
      const uniqueNamesObj = {}
      const uniqueMobs = limitedMobs.filter(mob => {
        if (uniqueNamesObj[mob.name]) {
          return false
        } else {
          uniqueNamesObj[mob.name] = true
          return true
        }
      })
      setMobs(uniqueMobs)
    } catch (error) {
      console.error('Error fetching mob details:', error)
      setError('No pets found')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMobs()
  }, [])

  // Debounce search value effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchVal(searchVal)
      setSearchLoading(false) // Stop loading when debounce finishes
    }, 1) // x ms debounce delay

    return () => {
      clearTimeout(handler)
    }
  }, [searchVal])

  // Set search loading when user types
  const handleSearchChange = e => {
    setSearchVal(e.target.value)
    setSearchLoading(true) // Start loading when typing
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  // Filter mobs based on debounced search value
  const filteredMobs = mobs.filter(mob => mob.name.toLowerCase().includes(debouncedSearchVal.toLowerCase()))

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Mob List</h2>
      <div className='flex items-center mb-4'>
        <input
          type='search'
          placeholder='Type to search'
          value={searchVal}
          onChange={handleSearchChange}
          className='p-2 border border-gray-300 rounded'
        />
        {searchLoading && <div className='ml-2 spinner'></div>}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-2'>
        {filteredMobs.length > 0 ? (
          filteredMobs.map((mob, index) => (
            <Link key={index} to={`/monster/${mob.id}`}>
              <MonsterCard mob={mob} />
            </Link>
          ))
        ) : (
          <div className='col-span-full text-center'>No mobs found</div>
        )}
      </div>
    </div>
  )
}

export default Monsters
