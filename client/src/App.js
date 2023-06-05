import React from "react";
import './App.css'
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'

function App(){
  return(
    <>
    <Menu/>
    <Navbar/>
      <Routes>
        <Route/>
      </Routes>
    </>
  )
}


export default App