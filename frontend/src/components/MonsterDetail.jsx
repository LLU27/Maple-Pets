import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const MonsterDetail = () => {
  let { id } = useParams()
  const navigate = useNavigate()

  const [monster, setMonster] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchSingleMonster = async id => {
    try {
      const { data } = await axios.get(`https://maplestory.io/api/GMS/250/mob/${id}`)
      setMonster(data)
    } catch (error) {
      console.error('Error fetching mob detail:', error)
      setError('Failed to fetch monster details')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSingleMonster(id)
  }, [id])
  // Fetch individual monster details based on the id and display them

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!monster) {
    return <div>No monster data available</div>
  }

  return (
    <div>
      <h2>Monster Detail Page</h2>
      <button onClick={() => navigate(-1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Back
      </button>
      <p>Display details for monster with id: {id}</p>
      <div className='bg-white shadow-lg rounded-lg p-4'>
        <img src={`https://maplestory.io/api/GMS/250/mob/${monster.id}/render/move`} alt={monster.name} className='m-auto' />
        <div className='p-4 text-center'>
          <h3 className='text-lg font-semibold mb-2'>{monster.name}</h3>
          <p>Level {monster.meta ? monster.meta.level : 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MonsterDetail
