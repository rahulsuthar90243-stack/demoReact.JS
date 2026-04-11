import React from 'react'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route part='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;