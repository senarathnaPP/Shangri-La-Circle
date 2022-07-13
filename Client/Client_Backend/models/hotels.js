const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelCode:{
        type:String,
        required:true,
        trim:true
    },

    hotelName:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true,
        trim:true
    },

    latitude:{
        type:String,
        
        trim:true
    },
    longitude:{
        type:String,
        required:true,
        trim:true
    },

    imageUrl:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Hotels',hotelSchema); //'Hotels' is the name of the document in the db