import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/page/homePage/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/page/shopPage/Shop'
import About from './components/page/aboutPage/About'
import Explore from './components/page/explorePage/Explore'
import Play from './components/page/playPage/Play'
import SignUp from './components/page/playPage/SignUp'
import Login from './components/page/playPage/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/play' element={<Play />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {/* 404 route */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
