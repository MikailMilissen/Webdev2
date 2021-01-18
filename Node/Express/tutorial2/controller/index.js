const fs = require('fs')

// HTTP Get request
const GetMethod = (req,res) =>{
    res.send('This is the Homepage')
}

// With the fylesystem we can create files and update them through our Insomnia program where we write in the body
const PostMethod = (req,res) =>{
    console.log(req.body)
    fs.writeFileSync('output.json',JSON.stringify(req.body))
    fs.appendFileSync('output2.json',JSON.stringify(req.body))
    res.json({
        message:'succes'
    })
}

const UpdateMethod = (req,res) =>{
 console.log(req.body)
    res.json({
        message:'succes'
    })
}

const DeleteMethod = (req,res) =>{
    console.log(req.body)
    res.json({
        message:'succes'
    })
}

module.exports = {GetMethod,PostMethod,UpdateMethod,DeleteMethod}