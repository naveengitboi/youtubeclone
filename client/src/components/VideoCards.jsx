import React from 'react'
import '../css/VideoCards.css'
function VideoCards(props) {
  return (
    <div className="card">
      <div className="thumbnailDiv">
        <img className='thumbnail' src='/assets/videoCard/thumbnail.png' alt="" />
      </div>
      <div className="videoDesc">
          <img src="/assets/videoCard/channelLogo.jpg" className='channelLogo' alt="" />
         <div className="details">
           <h3 className='smallTitle'>{props.content[0].title}</h3>
           <p className='channelDetailsText'>Star Sports</p>
           <p className='viewsCounts'>67K Views . 1 hr ago</p>
         </div>

      </div>
    </div>
  )
}

export default VideoCards