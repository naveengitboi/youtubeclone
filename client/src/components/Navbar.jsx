import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'

import '../css/Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
         <h3 className='titles'><AiFillYoutube/>JustWatch</h3>
      </div>
    </div>
  )
}

export default Navbar