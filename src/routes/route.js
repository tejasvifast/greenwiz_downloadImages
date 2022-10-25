const express = require('express')
const router = express.Router()
const  {downController}=require("../controllers/downController")

router.get('/downloads', downController)
module.exports=router