import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer className='footer'>
            <h2 className='info-title'>Si necesitas mas informacion contactame:<br/>
            <span>jonas1993seba@gmail.com</span>
            </h2>
            <div className='img-footer-container'>
                <a href="#" className='icon1'><img src={require("../Assets/holajr.png")}/></a>
                <a href="https://www.linkedin.com/in/jonathan-pojomovsky-94a474296" className='icon2'><img src={require("../Assets/linkedin.png")}/></a>
                <a href="https://github.com/JonathanSDP" className='icon3'><img src={require("../Assets/github.png")}/></a>
            </div>
            <span className='copy'>Copyright© 2024. Jonathan Pojomovsky</span>
        </footer>
    </div>
  )
}

export default Footer