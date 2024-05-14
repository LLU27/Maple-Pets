import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import About from './components/About'
import Explore from './components/Explore'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/About' element={<About />} />
        <Route path='/Explore' element={<Explore />} />

        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
