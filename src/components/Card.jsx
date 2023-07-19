import React, { useState } from 'react'
import '../styles/Card.css';
import Heart from '../images/heart.png';
import Liked from '../images/heart (1).png';
import Comment from '../images/chat.png';
import Share from '../images/share.png';
import Info from '../images/info.png';

const Card = ({post, socket, user}) => {

  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      recieverName: post.username,
      type
    });
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
            <img src={Heart} alt="" className="cardIcon" onClick={ () => handleNotification(1)}/>
          )
        }
        <img src={Comment} alt="" className="cardIcon" onClick={ () => handleNotification(2)}/>
        <img src={Share} alt="" className="cardIcon" onClick={ () => handleNotification(3)}/>
        <img src={Info} alt="" className="cardIcon infoIcon" onClick={ () => handleNotification(4)}/>
      </div>
    </div>
  )
}

export default Card