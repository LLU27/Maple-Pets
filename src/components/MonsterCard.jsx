import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MonsterCard = () => {
  const [mobs, setMobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchMobs = async () => {
    try {
      //Fetch list of mobs then destructure data from the response.data
      const {data} = await axios.get('https://maplestory.io/api/GMS/250/mob')
      const limitedMobs = data.slice(0, 10);
      console.log(limitedMobs)
      setMobs(limitedMobs)
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
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Mob List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {mobs.map((mob, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 ">
            <img
              src={`https://maplestory.io/api/GMS/250/mob/${mob.id}/render/move`}
              alt={mob.name}
              className='m-auto'
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{mob.name}</h3>
              <p className="">Level {mob.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonsterCard
