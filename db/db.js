const mongoose = require('mongoose')


const connectDB = async ()=>{
    try {
       const conn = await mongoose.connect(process.env.URL,{useNewUrlParser: true, useUnifiedTopology: true });
       console.log('connected to MongoDB...')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;