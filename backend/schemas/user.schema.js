const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    password: { type: String, 
        required: true 
    },
    admin: {
        type: Boolean
    }
})

module.exports = mongoose.model('User' , userSchema); 