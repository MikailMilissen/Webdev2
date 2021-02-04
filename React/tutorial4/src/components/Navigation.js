import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav className='NavBar'>
                <h3>Logo</h3>
                <ul className='nav-links'>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
