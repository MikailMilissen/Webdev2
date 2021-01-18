/*
Install express.js (npm i express)
*/

// INITIALIZING EXPRESS SERVER
// import express
const express = require ('express')
// call the express function
const app = express() 
//needs a port to run it
app.listen(3002,()=>{
    console.log('Server is running..')
})

/*
To start automatic refreshing your server in the terminal you can install nodemon (npm i nodemon)
then you go to package.json and at script you can add ("start": "nodemon index.js")
then you can start it up in the terminam (npm start)
Nodemon will start
*/

/*
Now we created modules to import our controllers from the other file
*/

// Importing modules
const {homeController,apiController}= require('./controller/index')

// setting up the 2 different pages with the 2 modules
app.get('/', homeController)

app.get('/api', apiController)

