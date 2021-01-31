import React, { Component } from 'react'

export class ChildComponent extends Component {
    render() {
        return (
            <div>
                Hello my name is {this.props.username} and I like the music {this.props.music[1].name}
                {console.log(this.props)}
                {console.log(this.props.music[1].name)}
                {console.log(this)}
            </div>
        )
    }
}

export default ChildComponent
