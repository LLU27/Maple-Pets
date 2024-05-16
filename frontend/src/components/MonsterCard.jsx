import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MonsterCard = () => {
  const [mobs, setMobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchMobs = async () => {
    try {
      // Fetch list of mobs then destructure data from the response.data
      const { data } = await axios.get('https://maplestory.io/api/GMS/250/mob')
      const limitedMobs = data.slice(0, 10)
      const uniqueNamesObj = {}
      // Filter mobs based on unique names
      const uniqueMobs = limitedMobs.filter(mob => {
        // If name already exists in uniqueNamesObj, return false (skip)
        if (uniqueNamesObj[mob.name]) {
          return false
        } else {
          // If name doesn't exist, mark it as seen and return true
          uniqueNamesObj[mob.name] = true
          return true
        }
      })
      setMobs(uniqueMobs)

      /*2nd way
      Extract unique mob names from limitedMobs using a Set

       const uniqueNamesSet = new Set(limitedMobs.map(mob => mob.name))

       Convert Set back to an array to preserve order

      const uniqueNamesArray = [...uniqueNamesSet]

      Filter mobs based on unique names

      const uniqueMobs = limitedMobs.filter(mob => {
         if (uniqueNamesArray.includes(mob.name)) {
            uniqueNamesArray.splice(uniqueNamesArray.indexOf(mob.name), 1) // Remove unique:snail from array then if limitd has snail again it returns false
          return true //only return true once for each unique names
          }
        return false
     }) */
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

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Mob List</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
        {mobs.map((mob, index) => (
          <Link key={index} to={`/monster/${mob.id}`}>
            <div key={index} className='bg-white shadow-lg rounded-lg p-4'>
              <img src={`https://maplestory.io/api/GMS/250/mob/${mob.id}/icon`} alt={mob.name} className='m-auto' />
              <div className='p-4 text-center'>
                <h3 className='text-lg font-semibold mb-2'>{mob.name}</h3>
                <p className=''>Level {mob.level}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MonsterCard
