import React from "react";
import './App.css'
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from './pages/Home'

import {Routes,Route} from 'react-router-dom'
import VideoCards from "./components/VideoCards";
import VideoPlaying from "./pages/VideoPlaying";

function App(){
  return(
    <>
    <Menu/>
    <Navbar/>
      <div className="pages">
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="videoplay">
            <Route path=":id" element={<VideoCards/>}/>
            <Route path="/videoplay/" element={<VideoPlaying/>}></Route>
          </Route>
        </Route>
      </Routes>
      </div>
    </>
  )
}


export default App