const homePageController = (req,res) =>{
    res.send('This is a homepage')
}

const loginController = (req,res) =>{
    res.send('Login Section')
}

const registerController =(req,res)=>{
    // console.log(req.body)  /// this will send the JSON object we send from the other program
    res.send('Register Section')
}

const apiController = (req,res)=>{
    res.json({
        id:24,
        title:'worker'
    })
}

const userController = (req,res)=>{
    console.log('user works!')
    console.log(req.body)
    res.send('User Section!')    
}

const userControllerParams = (req,res)=>{
    let userName = req.query.username //if you type in 'http://localhost:3003/userParams?username=Atilla' in insomnia, it will display 'Atilla'
    console.log(userName)
    res.send(`Welcome ${userName}`)
}

const singleUserController = (req,res)=>{
    let userID = req.params.id
    console.log(userID)
    res.send('Single User Profile Section')
}

const postController = (req,res) =>{
    console.log(req.params)
    res.send('Post Section')
}

module.exports = {homePageController,loginController,registerController,apiController,userController,userControllerParams,singleUserController,postController}