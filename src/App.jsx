import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import About from './components/About'
import Explore from './components/Explore'
import Play from './components/Play'
import SignUp from './components/SignUp'
import Login from './components/Login'

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
