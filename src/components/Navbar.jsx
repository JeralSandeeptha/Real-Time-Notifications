import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css';
import Notification from '../images/bell.png';
import Message from '../images/messenger.png';
import Settings from '../images/setting.png';

const Navbar = ({socket}) => {

    const [notifications, setNotifications] = useState([]);

    useEffect( () => {
        socket.on("getNotification", (data) => {
            setNotifications( (prev) => [...prev, data]);
        })
    }, [socket])

    console.log(notifications);

  return (
    <div className='navbar'>
        <div className="logo">Notification App</div>
        <div className="icons">
            <div className="icon">
                <img src={Notification} alt="icon" className='iconImg'/>
                <div className="counter">2</div>
            </div>
            <div className="icon">
                <img src={Message} alt="icon" className='iconImg'/>
                <div className="counter">2</div>
            </div>
            <div className="icon">
                <img src={Settings} alt="icon" className='iconImg'/>
                <div className="counter">2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar