import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Homepage from './Component/Homepage/Homepage'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </>
  )
}

export default App
