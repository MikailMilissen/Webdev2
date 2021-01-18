// Homepage

const homeController = (req,res) => {
    res.send('This is the Homepage')
}

// API

const apiController = (req,res) => {
    res.json({
        id:1
    })
    // res.send('This is the API page') This won't work because it already converted the page to json format
}

module.exports = {homeController,apiController}