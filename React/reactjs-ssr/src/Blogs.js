import React, { useContext } from 'react'
import {UserContext} from './context/UserContext'

function Blogs() {
    const value = useContext(UserContext)
    return (
        <div>
            {console.log(value)}
        </div>
    )
}

export default Blogs
