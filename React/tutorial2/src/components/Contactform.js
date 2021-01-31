import React, { Component } from 'react'
import { Input, Button} from 'reactstrap'

export default class Contactform extends Component {
    constructor(props){
        super(props)
        this.state={
            fullname:'',
            phonenumber:'',
            email:'',
            city:''
        }
    }

    dataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    dataSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="col-sm-12">
                <h1>Contact Form</h1>
                <p>Fullname</p>
                <Input name='fullname' className="lead" type="text" onChange={this.dataHandler} />
                <p>Phone number</p>
                <Input name='phonenumber' className="lead" type="text" onChange={this.dataHandler}/>
                <p>E-mail</p>
                <Input name='email' className="lead" type="text" onChange={this.dataHandler}/>
                <p>City</p>
                <Input name='city' className="lead" type="text" onChange={this.dataHandler}/>
                <br/>
                <Button className="bg-danger" onClick={this.dataSubmit}>Submit</Button>
                <p className='lead'>Fullname: {this.state.fullname}</p>
                <p className='lead'>Phone Number: {this.state.phonenumber}</p>
                <p className='lead'>E-mail: {this.state.email}</p>
                <p className='lead'>City: {this.state.city}</p>
            </div>
        )
    }
}
