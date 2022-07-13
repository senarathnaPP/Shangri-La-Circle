const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentId:{
        type:String,
        required:true,
        trim:true
    },
    logEmail:{
        type:String,
        required:true,
        trim:true
    },
    customerName:{
        type:String,
        required:true,
        trim:true
    },
    reservationType:{
        type:String,
        required:true,
        trim:true
    },
    numberOfReservations:{
        type:String,
        required:true,
        trim:true
    },
    numberOfNights:{
        type:String,
        required:true,
        trim:true
    },
    roomPrice:{
        type:String,
        required:true,
        trim:true
    },
    pyamentType:{
        type:String,
        required:true,
        trim:true
    },
    pyamentStaus:{
        type:String,
        required:true,
        trim:true
    },
   
   
},{timestamps:true})

const paymentervation = mongoose.model('payment',paymentSchema)

module.exports=paymentervation;