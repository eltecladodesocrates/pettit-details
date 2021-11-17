import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='container header-container'> 
                <ul>
                    <h1><NavLink to='/' exact={true}><h1>PettitDetails Logo</h1></NavLink></h1>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/Gallery'>Gallery</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
