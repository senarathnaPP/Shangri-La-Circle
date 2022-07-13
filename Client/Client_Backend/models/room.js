const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomType:{
        type:String,
        required:true,
        trim:true
    },

    hotelName:{
        type:String,
        required:true,
        trim:true
    },

    roomPrice:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true,
        trim:true
    },
    noOfBeds:{
        type:String,
        required:true,
        trim:true
    },
    image1Url:{
        type:String,
        required:true,
        trim:true
    },

    image2Url:{
        type:String,
        required:true
    },

    image3Url:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Rooms',roomSchema); //'Hotels' is the name of the document in the db