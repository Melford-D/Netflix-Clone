import React from 'react'
import { useState, useEffect } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img 
                    className='nav__logo' 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo"
                />
                <img 
                    className='nav__avatar' 
                    src="https://mpng.subpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg" alt="avatar"
                />
            </div>
        </div>
    )
}

export default Nav
