import React from 'react'
import { AiFillYoutube, AiOutlineVideoCameraAdd, AiOutlineBell,AiOutlineSearch } from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import userProfile from '../img/user.jpg'

import '../css/Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      
      <div className="logo">
         <h3 className='titles'><AiFillYoutube/>JustWatch</h3>
      </div>
      <div className="searchBar">
        <input type="search" />
        <span className='searchIcon'><AiOutlineSearch/></span>
      </div>

      <div className="logInSection">
        <AiOutlineVideoCameraAdd/>
        <AiOutlineBell/>
        <div className="userProfile">
          <img src={userProfile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar