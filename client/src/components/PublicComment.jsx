import React from 'react'
import '../css/Comments.css'
import { AiOutlineLike } from 'react-icons/ai'
import { BiDislike } from 'react-icons/bi'
function PublicComment() {
  return (
      <div className='commentContainer'>
        <div className="commentSub">
            <div className="channelImage"></div>
            <div className="comment">
               <p className='smallTexts'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur nobis odio blanditiis facilis itaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non eaque modi quas distinctio odit, ullam assumenda quaerat minus illum repudiandae!
               </p>
                <div className="commentLike">
                <AiOutlineLike/><span className='tinyTexts'>1.2k</span>
                <BiDislike/> 
                <span className='tinyTexts'>Reply</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublicComment