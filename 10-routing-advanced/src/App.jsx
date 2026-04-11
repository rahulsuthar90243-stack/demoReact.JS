import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/contact';
import { NotFount } from './pages/NotFount';
import { Project } from './pages/Project';
import Men from './pages/Men';
import { Women } from './pages/Women';
import { Course } from './pages/Course';
import { CourseDetails } from './pages/CourseDetails';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project' element={<Project/>} >
        <Route path='mens' element={<Men/>} />
        <Route path='womens' element={<Women/>} />
        </Route>
        <Route path='/courses' element={<Course/>} />
        <Route path='/courses/:id' element={<CourseDetails/>} />

        <Route path='*' element={<NotFount/>} />
      </Routes>
      <Footer/>
    </div>
  )
}


export default App;