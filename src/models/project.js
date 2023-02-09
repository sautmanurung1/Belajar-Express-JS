const mongoose = require('mongoose')
const Schemas = mongoose.Schema

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

module.exports = mongoose.model('ProjectsModels', ProjectModels)