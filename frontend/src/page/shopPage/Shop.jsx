import React from 'react'
import Nav from '../../components/Nav'
import shopBg from '../../assets/Images/playerBG.png'
const Shop = () => {
  return (
    <>
      <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${shopBg})` }}>
        <Nav />
        <div className=' container mx-auto flex items-center justify-center'></div>
      </div>
    </>
  )
}

export default Shop
