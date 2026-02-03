import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName,setBtnName]=useState('Login')
  return (
    <div className='header'>
        <div className='logo-container'>
            <h1>Swiggy</h1>
        </div>
      <div className='nav-items'>
        <ul>
           <li><Link to='/'>Home</Link></li>
            <li><Link to='/about' >About us</Link></li>
           <li> <Link to='/contact'>Contact us</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <button className='loginBtn' onClick={()=>{
                btnName === "Login"?setBtnName('Logout'):setBtnName('Login');
            }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header