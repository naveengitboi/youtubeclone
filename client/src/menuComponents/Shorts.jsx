import React from 'react'

import '../menuCss/Shorts.css'

import ShortCard from '../components/ShortCard'

function Shorts() {
  return (
    <>
    <div className="scrollContainer">
        <ShortCard/>
        <ShortCard/>
        <ShortCard/>
        <ShortCard/>
        <ShortCard/>
        <ShortCard/>
        </div>
    </>
  )
}

export default Shorts