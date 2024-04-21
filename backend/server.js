require('dotenv').config()
const express = require('express')
const tweetRoutes = require('./Routes/tweetRouter.js')
const { default: mongoose } = require('mongoose')
const app = express()

//
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

//router
app.use('/api/tweet',tweetRoutes)


//mongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(7777, () => {
        console.log('listening 7777 & connected mongoDB')
    })
})
.catch((error) => {console.log(error)})

