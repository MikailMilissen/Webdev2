const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://mikail:qwerty123@webdevsep.ctll5.mongodb.net/webdevsep?retryWrites=true&w=majority',{
    useCreateIndex:true
},()=>{
    console.log('connected')
})