const express = require("express")
const app=express()
const PORT=5000
const mongoose=require("mongoose")
const {MONGOURI}=require("./keys")





mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})
require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


// Anshu73200
//mongodb+srv://Anshu73200:<password>@cluster0.7iph8i4.mongodb.net/?retryWrites=true&w=majority

// const customMiddleware=(req,res,next)=>{
//     console.log("middleware executed!")
//     next()
// }


// app.get('/',(req,res)=>{
//     console.log("home")
//     res.send("hello world")

// })
// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("about page")

// })
app.listen(PORT,()=>{
    // console.log(`server running on port ${PORT}`)
    console.log('server running on port ',PORT)
})






