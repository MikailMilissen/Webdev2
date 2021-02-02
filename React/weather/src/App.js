import './App.css';
import fetch from 'node-fetch'
import React, { Component } from 'react'

const api = {
  key: 'e870db2398e5c18b06ed7b5c0729d702',
  base: 'api.openweathermap.org/data/2.5/'
}
const input = document.getElementsByClassName('zoeken').value


export class WeerApplicatie extends Component {
  
  
  state={
    stad:'',
    data:'',
  }
  
  zoeken =  (e) => {
    console.log(e.target.value)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${api.key}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            stad: e.target.value,
            data: data,
          })
        })
        console.log(this.state)
      }  
  

  render() {
    return (
      <div>
        <div className="App">
      <main className='main'>
      <h1>Weather App</h1>
      <input type='text' className='zoekbar' placeholder='Zoeken..' ></input>
      <div className='resultaat'>
          <div className='locatie'>{this.state.stad}</div>
          <div className='datum'></div>
      </div>
      <div className='weer'>
        <div className='temperatuur'>

        </div>
        <div className='soort-weer'>Zonnig</div>
      </div>
      <button onClick={this.zoeken}>Click here</button>
      </main>
    </div>
      </div>
    )
  }
  }

export default WeerApplicatie
