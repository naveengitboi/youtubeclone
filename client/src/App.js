import React from "react";
import './App.css'
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from './pages/Home'

import {Routes,Route} from 'react-router-dom'
import VideoCards from "./components/VideoCards";
import VideoPlaying from "./pages/VideoPlaying";
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";
import Shorts from "./menuComponents/Shorts";

function App(){
      const [closeMenu, setCloseMenu] = useState(false)
  function handleMenu(){
    setCloseMenu((prev) => {
        return !prev
    })

  }

  
  return(
    <>
     <div className="hamburgerMenu" onClick={handleMenu}  >
            <AiOutlineMenu  />
      </div> 
    <Menu closingTime = {closeMenu} />
    <Navbar />
      <div className="pages" style={closeMenu ? {marginLeft:"3rem"} : {marginLeft:"14rem"}} >
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="videoplay">
            <Route path=":id" element={<VideoCards/>}/>
            <Route path="/videoplay/" element={<VideoPlaying/>}></Route>
          </Route>
          <Route path='/shorts' element={<Shorts/>} />
        </Route>
      </Routes>
      </div>
    </>
  )
}


export default App