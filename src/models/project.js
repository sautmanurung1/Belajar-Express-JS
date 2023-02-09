import { Schema, model } from 'mongoose'
const Schemas = Schema

const ProjectModels = new Schemas({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    }
}, {
    timestamps: true,
})

export default model('ProjectsModels', ProjectModels)