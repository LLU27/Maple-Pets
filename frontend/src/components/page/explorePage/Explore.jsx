import Nav from '../../Nav'
import Monsters from '../../Monsters'
import clouds from '../../../assets/Images/cloud.svg'
const Explore = () => {
  return (
    <>
      <Nav />
      <div className='relative w-full h-[144px] overflow-hidden'>
        <div className='cloud' style={{ backgroundImage: `url(${clouds})` }}></div>
      </div>
      <div style={{ background: 'linear-gradient(0deg, #FFEA6D 19.37%, #FEF9C2 74.33%)' }}>
        <Monsters />
      </div>
    </>
  )
}

export default Explore
