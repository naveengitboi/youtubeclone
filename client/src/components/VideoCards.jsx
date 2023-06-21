import React from 'react'
import '../css/VideoCards.css'
import { Link } from 'react-router-dom'
function VideoCards(props) {
  const title = props.vcData.title
  const channelName = props.vcData.channelName
  const views = props.vcData.viewsCount
  const dateTime =  props.vcData.dateTime
  // const id = props.vcData.id
  return (

    <Link to="/videoplay">
       <div className="card">
      <div className="thumbnailDiv">
        <img className='thumbnail' src='/assets/videoCard/thumbnail.png' alt="" />
      </div>
      <div className="videoDesc">
          <img src="/assets/videoCard/channelLogo.jpg" className='channelLogo' alt="" />
         <div className="details">
           <h3 className='smallTitle'>{title}</h3>
           <p className='channelDetailsText'>{channelName}</p>
           <p className='viewsCounts'>
            <span>{views},</span>
            <span>{dateTime}</span>
           </p>
         </div>

      </div>
    </div>
    </Link>

  )
}

export default VideoCards