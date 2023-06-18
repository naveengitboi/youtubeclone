import React from 'react'
import '../css/VideoCards.css'
function VideoCards(props) {
  return (
    <div className="card">
      <img className='thumbnail' src='/assets/videoCard/thumbnail.png' alt="" />
      <div className="videoDesc">
          <img src="" alt="" />
         <div className="details">
           <h3 className='title'>{props.content[0].title}</h3>
           <p className='channelName'>Star Sports</p>
           <p className='viewsCounts'>67K , 1 hr ago</p>
         </div>

      </div>
    </div>
  )
}

export default VideoCards