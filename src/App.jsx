import './App.css'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
      </Routes>
    </>
  )
}

export default App
