import React from "react";
import './App.css'
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from './pages/Home'

import {Routes,Route} from 'react-router-dom'
import VideoCards from "./components/VideoCards";

function App(){
  return(
    <>
    <Menu/>
    <Navbar/>
      <div className="pages">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ='video'>
          <Route path=":/id" element={<VideoCards/>}></Route>
        </Route>
      </Routes>
      </div>
    </>
  )
}


export default App