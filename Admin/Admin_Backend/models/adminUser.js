const { text } = require('body-parser');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const user = new schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
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

const userObject = mongoose.model('Adminuser',user);

module.exports=userObject;

