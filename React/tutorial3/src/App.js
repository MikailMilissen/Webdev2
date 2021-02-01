import React, { Component } from 'react'
import Faker from 'faker'
import { Button, Input } from 'reactstrap'
import FakePersonGenerator from './components/FakePersonGenerator'

import WeatherApp from './components/WeatherApp'

export class App extends Component {

  state={
    people:[],
    blogposts:[]
  }

  FakePerson = (howmany) => { //howmany = 19
    let people = this.state.people

    for(let index = 0; index < howmany ; index++){ 
      let name = Faker.name.findName()
      let username = Faker.internet.userName()
      let avatar = Faker.internet.avatar()
      let obj = {
        name:name,
        username:username,
        avatar:avatar
      }
      people.push(obj)
     }
     this.setState({
       people:people
    })
  }

  render() {
    return (
      <div>
        <FakePersonGenerator fakepeople={this.state.people}/> 
        { /* We are passing the data through to our other component with component attributes*/ }
        <Input type='number' id="howmany" style={{ // Add double curly braces to style a component
          width:'200px'
        }}/>
        <Button onClick={()=> this.FakePerson(document.getElementById('howmany').value)}>Generate Fake Data</Button>
        <hr/>
        <WeatherApp/>
        
      </div>
    )
  }
}

export default App
