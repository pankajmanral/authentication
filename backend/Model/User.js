const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unquie : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : 'User'
    },
    created_at : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("User",UserSchema)