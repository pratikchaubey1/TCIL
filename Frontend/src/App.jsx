import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Tender from './Pages/Formenu/Tender'
import List from './Pages/Formenu/List/List'

function App() {
  return (
  

    <div className="bg-white min-h-screen overflow-hidden">
     <Navbar/>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path='/tender' element={<Tender/>}/>
      <Route path='/list' element={<List/>}/>
    </Routes>
    </div>
  
    
  )
}

export default App