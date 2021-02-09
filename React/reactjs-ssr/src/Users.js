import React, { useContext } from 'react'
import ChildComponent from './ChildComponent'
import {UserContext} from './context/UserContext'

function Users() {
    const value = useContext(UserContext)
    return (
        <div>
            <h1>Hello</h1>
            {value}
        </div>
    )
}

export default Users
