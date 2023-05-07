import React from 'react'
import "./Header.css";
function Header() {
  return (
    <div className='header'>
        <div className='icon'>
            <img src="https://babynama.com/_next/image?url=%2Fimg%2Flogo.webp&w=384&q=75" className='logo_img'/>
        </div>
        <div className='options'>
            <span>Home</span>
            <span>Testimonials</span>
            <span>About</span>
            <span>Services</span>
            <span className='active'>Plans</span>
            <span>Doctors</span>
            <span>Baby Tools</span>
            <span>FAQs</span>
            <span>Contact</span>
        </div>
    </div>
  )
}

export default Header;