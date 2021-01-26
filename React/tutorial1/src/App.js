// use the snipper rcc for a class component
// use the snippet rfce for a functio ncomponent

import React from 'react'
import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'

let number = 10
let studentNames = ['Mikail','Susan','Lotte','Emmanuel']
let myDB = [
    {
        id:1,
        title:'lorem',
        body:'ipsum'
    },
    {
        id:3,
        title:'lorem',
        body:'ipsum'
    },
    {
        id:3,
        title:'lorem',
        body:'ipsum'
    }
]

function App() {
    return (
        <div>
               
                <Header/>
                <Home/>
                {4+4}
              {/*alert('Hello world')*/}
              {console.log(number)}
                {console.log(studentNames)}
                {
                    studentNames.map((student,index)=>
                        <p className="lead" key={index}>{student}</p> // This gives a warning without 'key'
                )}
                {
                    myDB.map((obj,index)=>
                    <p>{obj.title}</p>
                )}

                <Footer/>
          
        </div>
    )
}

export default App
