import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Mainpage from './Pages/LandingPage/mainpage'
import Aboutme from './Pages/Aboutme'
import Project from './Pages/Project'
import Resume from './Pages/Resume'
import Skill from './Pages/Skill'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
