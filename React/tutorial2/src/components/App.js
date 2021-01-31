import React, { Component } from 'react'
import { Input } from 'reactstrap';
import Contactform from './Contactform';
// import ChildComponent from './ChildComponent';
import Counter from './Counter';


// const discography = [
//     {
//         name:'Linkin Park',
//         year:2002
//     },
//     {
//         name:'Nirvana',
//         year:1989
//     },
//     {
//         name:'Mos Def',
//         year:2010
//     }
// ]

export class App extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"Arne",
            password:12345,
            age:12,
            scores:[1,2,3],
            myFunction:()=>console.log('test'),
            comment: ''
        }
        
    }
    
    clickMeFunction = () => {
        console.log('Hello World')
        this.setState({
            username:"Mikail",
            age:this.state.age+1
        })
        console.log(this.state)
    }

    inputHandler = (e) => {
        this.setState({
            comment:e.target.value
        })

    }

    render() {
        return (
            <div>
                {/* {console.log(this.props.data)}
                <ChildComponent username="Mikail" music={discography} />
                {console.log(this.state.myFunction())}
                <a href="#" onClick={this.clickMeFunction} >Click here</a> */}

                <Counter projectname="Counter Project v1.0" />
                <hr/>
                <Input type='text' className='bg-primary text-white' onChange={this.inputHandler}/>
                <p className="lead">{this.state.comment}</p>
                <hr/>
                <Contactform/>

            </div>
        )
    }
}

export default App


