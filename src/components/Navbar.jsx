import React from 'react'
import '../styles/Navbar.css';
import Notification from '../images/bell.png';
import Message from '../images/messenger.png';
import Settings from '../images/setting.png';

const Navbar = () => {
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