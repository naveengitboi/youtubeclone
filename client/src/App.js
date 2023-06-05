import React from "react";
import './App.css'
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from './pages/Home'

import {Routes,Route} from 'react-router-dom'

function App(){
  return(
    <>
    <Menu/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}


export default App