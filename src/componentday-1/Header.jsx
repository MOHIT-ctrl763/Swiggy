import React, { useState } from 'react'

const Header = () => {
    const [btnName,setBtnName]=useState('Login')
  return (
    <div className='header'>
        <div className='logo-container'>
            <h1>Swiggy</h1>
        </div>
      <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className='loginBtn' onClick={()=>{
                btnName === "Login"?setBtnName('Logout'):setBtnName('Login');
            }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header