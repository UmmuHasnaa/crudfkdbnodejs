const mongoose = require('mongoose');
const connectDB=async(uri)=>{

    const connection = await mongoose.connect('mongodb+srv://ummuhasnaa90:<Hafsa_9215>@cluster0.i926hnm.mongodb.net', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(connection)
if(connection){
    console.log('mongodb connected successfully')
}else{
    console.log('mongodb connection failed')
}
    return connection;
}
module.exports = connectDB;