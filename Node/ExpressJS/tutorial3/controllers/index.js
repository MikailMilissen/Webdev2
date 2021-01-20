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

module.exports = {homePageController,loginController,registerController,apiController}