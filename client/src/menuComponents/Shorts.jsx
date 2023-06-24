import React from 'react'

import '../menuCss/Shorts.css'
import { AiFillDislike, AiFillLike, AiOutlineShareAlt } from 'react-icons/ai'

function Shorts() {
  return (
    <div className='shortsContainer'>
        <div className="short">
            <div className="shortVideo"></div>
            <div className="shortInformation"></div>
            <div className='likesSideBar'>
                <div className="icon">
                    <AiFillLike/>
                </div>
                <div className="icon">
                    <AiFillDislike/>
                </div>
                <div className="icon"><AiOutlineShareAlt/></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
        </div>
    </div>
  )
}

export default Shorts