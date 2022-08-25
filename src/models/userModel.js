const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: Number,
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser: {
        type: Boolean,
        defult: false
    }
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array