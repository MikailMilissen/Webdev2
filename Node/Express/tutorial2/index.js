// HTTP Request

const express = require('express')
const app = express()
const {GetMethod,PostMethod,UpdateMethod,DeleteMethod} = require('./controller/index.js')


const bodyParser = require('body-parser')
app.use(bodyParser())

// Get Method

app.get('/',GetMethod)

// Post Method

app.post('/',PostMethod)


// Listen Method
app.listen(3001,()=>{
    console.log('Server is running')
})


/* We can also send something from the program Insomnia
- in the program click Body, then JSON
- then start typing some json code
- we need the body-parser application to run this
- we use the code req.body in the module
- we need to import the body-parser extension into the app()
- click 'send' again in the program
- this will send the json code back to our node terminal
*/


// Update method
app.put('/',UpdateMethod);

// Delete method

app.delete('/',DeleteMethod);

