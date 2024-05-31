import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/homePage/Home'
import ErrorPage from './page/ErrorPage'
import Shop from './page/shopPage/Shop'
import About from './page/aboutPage/About'
import Explore from './page/explorePage/Explore'
import Play from './page/playPage/Play'
import SignUp from './page/playPage/SignUp'
import Login from './page/playPage/Login'
import SingleMonster from './components/SingleMonster'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/play' element={<Play />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/monster/:id' element={<SingleMonster />} />
        {/* 404 route */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
