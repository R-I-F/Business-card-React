import { useState } from 'react'

import './App.css'
import ProfilePic from "./ProfilePic.jsx"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from './Footer.jsx'

function App() {
  return(
    <div className='app'>
      <ProfilePic/>
      <Header/>
      <Body />
      <Footer />
    </div> 
  )
}

export default App
