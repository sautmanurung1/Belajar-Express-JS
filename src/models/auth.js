const mongoose = require('mongoose')
const Schemas = mongoose.Schema

const Auhtentication = new Schemas({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

module.exports = mongoose.model('Authentication', Auhtentication)