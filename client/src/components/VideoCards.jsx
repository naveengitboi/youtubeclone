import React, { useEffect, useState } from "react";
import "../css/VideoCards.css";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
function VideoCards(props) {
  const title = props.vcData.title;
  const views = props.vcData.views;
  const originalDate = props.vcData.createdAt;
  const videoThumbnail = props.vcData.imgUrl;
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const getUser = await axios
        .get(`http://localhost:8000/api/user/find/${props.vcData.userId}`)
        .catch((err) => console.log(err));
      console.log(getUser);
      console.log(getUser.data);
      const userData = getUser.data;
      setUser(userData)
    };
    fetchUser();
  }, []);

  return (
    <Link to="/videoplay">
      <div className="card">
        <div className="thumbnailDiv">
          <img className="thumbnail" src={videoThumbnail} alt="" />
        </div>
        <div className="videoDesc">
          <img
            src="/assets/videoCard/channelLogo.jpg"
            className="channelLogo"
            alt=""
          />
          <div className="details">
            <h3 className="smallTitle">{title}</h3>
            <p className="channelDetailsText">{user.name}</p>
            <p className="viewsCounts">
              <span>{views},</span>
              <span>{format(originalDate)}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCards;
