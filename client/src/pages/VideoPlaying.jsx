import React from 'react'
import '../css/VideoPlaying.css'
import {AiOutlineLike,AiOutlinePaperClip,AiOutlineBell} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {TbShare3,TbPigMoney,TbTableOptions,TbPlaylistAdd} from 'react-icons/tb'
function VideoPlaying() {
  return (
    <div className='videoContainer'>
      <div className="video">
      </div>
      <div className="videoInfo">
        <div className="videoTitle">React Video Sharing App UI Design | Youtube UI Clone with React</div>
        <div className="channelBanner">
          <div className="channel">
            <div className="channelDetail">
              <div className="channelImage"></div>
            <div className="channelInfo">
              <h3 className='channelName'>Lama Dev</h3>
              <p className='tinyTexts'>217K Subscribers</p>
            </div>
            <div className="joinSub">
              <button className='smallButtons'>Join</button>
              <button className='smallButtons'> <AiOutlineBell/> Subscribe</button>
            </div>
            </div>

            <div className="likesCount">
              <div className="smallButtons likes">
                <span className='smallTexts'> <AiOutlineLike/> 1.8K</span>
                <span className='smallTexts'> <BiDislike/></span>
              </div>

              <div className="smallButtons smallTexts"> <TbShare3/> Share</div>
              <div className="smallButtons smallTexts"> <TbPigMoney/> Thanks</div>
              <div className="smallButtons smallTexts"> <AiOutlinePaperClip/>Clip</div>
              <div className="smallButtons smallTexts"><TbPlaylistAdd/> Save</div>
              <div className="smallButtons smallTexts"><TbTableOptions/></div>
            </div>
          </div>
        </div>
        <div className="videoDescription">
          <h3 className='tinyTexts'>1.3M views 1year ago</h3>
          <p className='tinyTexts'>
            Subscribe for more content like this! 
            I made my cheap keQing cosplay look like a movie(KINDA)
          </p>
            <p className='tinyTexts'>show more</p>
        </div>
        <div className="comments">
          
        </div>
      </div>
    </div>
  )
}

export default VideoPlaying