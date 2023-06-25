import React from 'react'
import { AiFillYoutube, AiOutlineVideoCameraAdd, AiOutlineBell,AiOutlineSearch } from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import userProfile from '../img/user.jpg'
import {Link, NavLink} from 'react-router-dom'
import '../css/Navbar.css'



function Navbar() {



  return (
    <div className="navbar">
      <div className="logo">
         <Link to='/'> <h3 className='titles' ><AiFillYoutube/>JustWatch</h3></Link>
      </div>
      <div className="searchBar">
        <input type="search" />
        <span className='searchIcon'><AiOutlineSearch/></span>
      </div>

      <div className="logInSection">
        <AiOutlineVideoCameraAdd/>
        <AiOutlineBell/>
        <div className="userProfile">
          <NavLink to='/signinpage' ><button className='smallHeading'>Sign In</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar