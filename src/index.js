const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const route = require('./routes/route')

app.use("/", route)

app.listen(process.env.PORT || 3000, function(){
    console.log("express app running on port " + (process.env.PORT || 3000))
})