import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <p>Pettit Details copyright &copy; {new Date().getFullYear()} all rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer