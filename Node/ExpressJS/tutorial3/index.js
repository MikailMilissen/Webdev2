// Advanced Routing and middleware

const express = require('express')
const app = express()
const {homePageController,loginController} = require ('./controllers/index')

function loginCheck(req,res,next) {
    let isLogged = false;
    if(!isLogged){ // = true
        console.log('middleware is running and we are logged in')
        next() // if you don't type in 'next()' the page will be loading and stuck on the if statement
    }
}

app.use(loginCheck) // Application Level Middleware:  this application will run for all the pages, this application serves as MIDDLEWARE for all the pages 

app.listen(3001,()=>{
    console.log('server is up and running..')
})

app.get('/',homePageController);
app.get('/login',loginController)