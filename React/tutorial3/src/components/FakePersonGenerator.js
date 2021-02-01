import React, { Component } from 'react'
import { Container } from 'reactstrap'


// npm install reactstrap faker bootstrap

class FakePersonGenerator extends Component {
// We can use this function especially with api's when we want to run it after we run the render() part
    componentDidMount(){
        console.log('Hello World from component')
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>FakePersonGenerator</h1>
                    {
                        this.props.fakepeople.map((people,index) => (
                            <p className='lead'>
                                Name: {people.name}
                                <br/>
                                Username: {people.username}
                                <br/>
                                Avatar: {people.avatar}
                                <hr/>
                                </p>
                            
                        ))
                    }
                    {console.log(this.props.fakepeople)}
                </Container>
            </div>
        )
    }
}

export default FakePersonGenerator
