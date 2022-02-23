import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, setshow] = useState(false);
    const navigate = useNavigate();

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
            <img onClick={() => navigate('/')} alt='netflix logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' className='nav-logo'/>
            <img onClick={() => navigate('/profile')} alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7q6Xxz10aPOmWfZPZMZGaXMpAV2MVFjTM0zZrCdBadCQIvfN_o597iR2LeDRZubFAxY&usqp=CAU' className='nav-avatar'/>
        </div>
    </div>
  )
}

export default Nav