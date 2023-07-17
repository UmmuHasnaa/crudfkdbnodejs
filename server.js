const express = require('express');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');

const app = express();
connectDB (process.env.MONGO_URI);
console.log(connectDB)
const Server = app.listen(
    5001,
    console.log('Server Running')
);