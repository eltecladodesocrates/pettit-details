import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='container header-container'> 
            <NavLink to='/' exact={true}><div className='logo-dbg'></div></NavLink>
                <ul className='nav-bar'>             
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/Gallery'>Gallery</NavLink></li>
                </ul>
            </div>
            <div className='hero-img hero-container'>
                <h2 className='hero-title'>Lorem Ipsum</h2>
                <p className='hero-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Neque volutpat ac tincidunt vitae semper quis lectus</p>
            </div>
        </header>
    )
}

export default Header
