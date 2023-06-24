import React from 'react'
import '../menuCss/Shorts.css'
import {BiCommentDetail,BiDotsHorizontalRounded} from 'react-icons/bi'
import { AiFillDislike, AiFillLike, AiOutlineShareAlt } from 'react-icons/ai'

function ShortCard() {
  return (
     <div className='shortsContainer'>
        <div className="short">
            <div className="shortVideo">

                  <div className="shortInformation">
                    <div className="descriptions mediumTexts">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, alias!
                    </div>
                    <div className="shortAccount">
                        <div className="imageContainer"></div>
                        <p className='smallTexts'>
                            @naveenau
                        </p>
                        <button className='btn smallTexts'>Subscribe</button>
                    </div>
                  </div>
            </div>
          
            <div className='likesSideBar'>
                <div className="icon">
                    <AiFillLike/>
                </div>
                <div className="icon">
                    <AiFillDislike/>
                </div>
                <div className="icon"><BiCommentDetail/></div>
                <div className="icon"><AiOutlineShareAlt/></div>
                <div className="icon"><BiDotsHorizontalRounded/></div>
                <div className="icon"></div>
            </div>
        </div>
    </div>
  )
}

export default ShortCard