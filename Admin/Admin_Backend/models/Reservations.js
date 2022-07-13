const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const roomReservationSchema = new Schema({
    hotelName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
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
        type:Number,
        required:true,
        trim:true
    },
    numberOfNights:{
        type:Number,
        required:true,
        trim:true
    },
    roomPrice:{
        type:String,
        required:true,
        trim:true
    },
    firstDate:{
        type:String,
        required:true,
        trim:true
    },
   secondDate:{
        type:String,
        required:true,
        trim:true
    },
    numberOfDays:{
        type:String,
        required:true,
        trim:true
    },
   
},{timestamps:true})

const roomReservation = mongoose.model('roomReservation',roomReservationSchema)

module.exports=roomReservation;