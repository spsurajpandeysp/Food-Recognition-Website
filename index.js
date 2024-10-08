const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {getAboutData} =  require('./controller/about.controller')
dotenv.config();
const app = express();
const {foodFindByName} =  require('./controller/food.controller')
app.use(cors());
app.use(express.json());
const {contactUs} =  require('./controller/contactUs.controller')

mongoose.connect(process.env.DATABASE_URL)

app.get('/api/fooddata/:foodName',async (req,res)=>{
    await foodFindByName(req,res)
})
app.post('/api/contactus/',async (req,res)=>{
    await contactUs(req,res)
})


app.get('/api/about/',async (req,res)=>{
    await getAboutData(req,res)
})


app.listen(process.env.PORT,()=>{
    console.log("server successfully run");
})