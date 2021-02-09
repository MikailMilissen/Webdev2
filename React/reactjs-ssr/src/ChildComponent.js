import React from 'react'
import ChildComponentTwo from './ChildComponentTwo'

export default function ChildComponent({userdata}) {
    return (
        <div>
            <h1>
                This is a Child Component
            </h1>
            {console.log('Child1',userdata)}
            <ChildComponentTwo userdata={userdata}/>
        </div>
    )
}
