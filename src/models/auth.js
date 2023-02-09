import { Schema, model } from 'mongoose'
const Schemas = Schema

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

export default model('Authentication', Auhtentication)