const homePageController = (req,res) =>{
    res.send('This is a homepage')
}

const loginController = (req,res) =>{
    res.send('Login Section')
}

module.exports = {homePageController,loginController}