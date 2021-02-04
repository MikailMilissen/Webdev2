import React from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Pokemon from './Projects/Pokemon'


export default function Projects() {
    return (
        <div>
            <ul className='project-links'>
                    <Link to='/projects/pokemon'>
                        <li className='projects'>Pokemon App</li>
                    </Link>
                    <Link to='/projects/cryptoconverter'>
                        <li className='projects'>Cryptocurrency Converter</li>
                    </Link>
                    <Link to='/projects/3'>
                        <li className='projects'>Project 3</li>
                    </Link>
                </ul>
        </div>
    )
}
