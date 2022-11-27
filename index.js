const express = require('express');
const connectDB = require('./db/db')
const {config} = require('dotenv');

const app = express();
config();
connectDB();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hello wlcm');
})

app.listen(PORT,(err)=>{
    if(err)
    console.log('err in code');
    else
    console.log(`server running on port:${PORT}`);
})