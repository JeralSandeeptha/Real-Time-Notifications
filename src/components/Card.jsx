import React, { useState } from 'react'
import '../styles/Card.css';
import Heart from '../images/heart.png';
import Liked from '../images/heart (1).png';
import Comment from '../images/chat.png';
import Share from '../images/share.png';
import Info from '../images/info.png';

const Card = ({post}) => {

  const [liked, setLiked] = useState(false);

  const handleNotification = () => {
    setLiked(true);
  }

  return (
    <div className='card'>
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="ineractions">
        {
          liked ? (
            <img src={Liked} alt="" className="cardIcon" />
          ) : (
            <img src={Heart} alt="" className="cardIcon" onClick={handleNotification}/>
          )
        }
        <img src={Comment} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  )
}

export default Card