const mongoose = require('mongoose');

const schema = mongoose.Schema;

const clientSchema = new schema({


    Title:{
        type:String,
        required:true,
        trim:true

    },
    customerFirstName:{
        type:String,
        required:true,
        trim:true

    },
    customerSecondName:{
        type:String,
        required:true,
        trim:true

    },
    dateOfBirth:{
        type:String,
        required:true,
        trim:true

    },
    country:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true

    },
    phoneNumber:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
        trim:true

    }
    
},{timestamps:true})

const clientRegistration = mongoose.model('Client',clientSchema);

module.exports=clientRegistration;