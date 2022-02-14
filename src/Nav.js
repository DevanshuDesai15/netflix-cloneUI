import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, setshow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            setshow(true)
        }else{
            setshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    },[])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className='nav-content'>
            <img alt='netflix logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' className='nav-logo'/>
            <img alt='avatar' src='https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png' className='nav-avatar'/>
        </div>
    </div>
  )
}

export default Nav