// Advanced Routing and middleware


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {homePageController,loginController,registerController,apiController,userController,userControllerParams,singleUserController,postController} = require ('./controllers/index')


app.listen(3003,()=>{
    console.log('server is up and running..')
})

function loginCheck(req,res,next) {
    let isLogged = false;
    if(!isLogged){ // = true
        console.log('middleware is running and we are logged in')
        next() // if you don't type in 'next()' the page will be loading and stuck on the if statement
    }
}
// now we are making a middleware function for the register page(we will call it caputure data)
// We also need bodyparser for that (npm i body-parse)
app.use(bodyParser({
    extended:true
}))

function captureData(req,res,next){
    console.log(req.body)
    next()
    
}

// now we are making a differen middleware function to check if the user has the same apiToken as we have declared above
// in the program Insomnia we made a new request with ../api and then we go to HEADER and fill in a new Header (New header: Token, New value: 123456)
let apiToken = '12345'

function checkToken (req,res,next){
    let token = req.headers.token // our added header and value should be in this property
    console.log(token)
    if (token != apiToken){
        res.status(500).send('invalid token')
    }
    next() // always use next, otherwise it will get stuck
}

app.use(loginCheck) // Application Level Middleware:  this application will run for all the pages, this application serves as MIDDLEWARE for all the pages 

app.get('/',homePageController); 
app.get('/login',loginCheck,loginController) // By adding the middleware function (loginCheck) this becomes Router Level Middleware. You can add more middleware aswell if you want
app.post('/register',captureData,registerController)
app.get('/api',checkToken,apiController)

app.all('/user',userController) // All http request(get,put,post,delete)

// Query Params
// https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
    // https://stackabuse.com/?page=2&limit=3
// We will try to get query parameters and there values (everything that is behind the .com/)
app.get('/userParams',userControllerParams)

// Now let's try to get to  read something like /user/*a number* user/5 for example
app.get('/userParams/:id',singleUserController)

// Now we will try with RegExp
app.get('/post-(.*)',postController) // Everything after post- will be returned
