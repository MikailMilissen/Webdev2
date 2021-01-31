import React, { Component } from 'react'
import {Container,Row,Col, Button} from 'reactstrap'


export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }

        this.Increase = this.Increase.bind(this) // We need to bind this to the constructor, otherwise this will give an error

    }

Increase(){ //We always use arrow functions in react, otherwise we need to bind it to the constructor (https://codeburst.io/binding-functions-in-react-b168d2d006cb)
    console.log('Increase Function')
    this.setState({
        count:this.state.count+1 
    })
}

Decrease = () => { // Now we used an arrow function so we don't need to bind it in the constructor
    console.log('Decrease Function')
    if(this.state.count <= 0){
        this.setState({
            count:0
        })
    }else{
        this.setState({
            count: this.state.count-1
        })
    }
}

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h1>{this.props.projectname}</h1>
                        <p className="lead font-weight-bold text-danger">Count: {this.state.count}</p>
                        <hr></hr>
                        <Button className="mr-1" color='danger' onClick={this.Increase}>+</Button>
                        <Button color='dark' onClick={this.Decrease}>-</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
