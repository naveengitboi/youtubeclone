import React from 'react'
import '../css/VideoPlaying.css'
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
              <button>Join</button>
              <button>Subscribe</button>
            </div>
            </div>

            <div className="likesCount">
              <div className="smallButtons likes">
                <span className='smallTexts'>1.8K</span>
                <span className='smallTexts'>1K</span>
              </div>

              <div className="smallButtons smallTexts">Share</div>
              <div className="smallButtons smallTexts">Thanks</div>
              <div className="smallButtons smallTexts">Clip</div>
              <div className="smallButtons smallTexts">Save</div>
              <div className="smallButtons smallTexts">Report</div>
            </div>
          </div>
        </div>
        <div className="videoDescription"></div>
        <div className="comments"></div>
      </div>
    </div>
  )
}

export default VideoPlaying