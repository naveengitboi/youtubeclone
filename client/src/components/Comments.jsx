import React from 'react'
import '../css/Comments.css'
import '../css/VideoPlaying.css'
import {BsEmojiSmile} from 'react-icons/bs'
function Comments() {
  return (
    <div className='commentContainer'>
        <div className="commentSub">
            <div className="channelImage"></div>
            <div className="comment">
                <input className='commentText smallTexts' type="text" placeholder='Add a comment...'/>
                <div className="submittingDiv">
                    <div className="emoji">
                        <BsEmojiSmile/>
                    </div>
                    <div className='submitBtns'>
                        <button>cancel</button>
                        <button>Comment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comments;