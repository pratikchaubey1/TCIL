import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Tender from './Pages/Formenu/Tender'
import List from './Pages/Formenu/List/List'

function App() {
  return (
  

    <div className="bg-white min-h-screen overflow-hidden">
     <Navbar/>
     <List/>
    <Routes> 
      {/* <Route path="/" element={<List/>} />
      <Route path='/tender' element={<Tender/>}/> */}
      
    </Routes>
    </div>
  
    
  )
}

export default App