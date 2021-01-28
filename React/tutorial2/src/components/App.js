import React, { Component } from 'react'

export class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {console.log(this.props.data)}
            </div>
        )
    }
}

export default App


