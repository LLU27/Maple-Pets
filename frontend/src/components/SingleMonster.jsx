import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import SingleMonsterCard from './SingleMonsterCard'
import Nav from './Nav'
import { TiArrowLeftThick } from 'react-icons/ti'
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

  // checkSummonType

  useEffect(() => {
    fetchSingleMonster(id)
    console.log(monster)
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
      <Nav />

      <div className='container m-auto my-6 '>
        <button onClick={() => navigate(-1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
          <TiArrowLeftThick />
        </button>
        <SingleMonsterCard monster={monster} />
        <div></div>
      </div>
    </div>
  )
}

export default MonsterDetail
