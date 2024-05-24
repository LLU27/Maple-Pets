import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import SingleMonsterCard from './SingleMonsterCard'
import Nav from './Nav'
import { TiArrowLeftThick } from 'react-icons/ti'

const MonsterDetail = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [monsterData, setMonsterData] = useState(null)

  const fetchLocationDetails = async locationId => {
    try {
      const { data } = await axios.get(`https://maplestory.io/api/GMS/250/map/${locationId}`)
      return {
        streetName: data.streetName,
        name: data.name,
        bgm: data.backgroundMusic,
        bgmUrl: `https://maplestory.io/api/GMS/250/map/${locationId}/bgm`,
      }
    } catch (error) {
      console.error('Error fetching location details:', error)
      setError('Failed to fetch location details')
      return null
    }
  }

  const fetchSingleMonster = async id => {
    try {
      const { data } = await axios.get(`https://maplestory.io/api/GMS/250/mob/${id}`)
      if (data.foundAt && data.foundAt.length > 0) {
        const locationDetails = await fetchLocationDetails(data.foundAt[0])
        setMonsterData({ monster: data, location: locationDetails })
      } else {
        setMonsterData({ monster: data, location: null })
      }
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

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!monsterData) {
    return <div>No monster data available</div>
  }

  return (
    <div>
      <Nav />
      <div className='container m-auto p-2 '>
        <button onClick={() => navigate(-1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  m-4'>
          <TiArrowLeftThick />
        </button>

        <SingleMonsterCard monsterData={monsterData} />
      </div>
    </div>
  )
}

export default MonsterDetail
