const { validationResult } = require('express-validator')
const ProjectModels = require('../models/project')
exports.CreateProjectsControllers = (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        const err = new Error('Input value tidak ada')
        err.errorStatus = 400
        err.data = error.array()
        throw err
    }

    const title = req.body.title
    const description = req.body.description

    const Post = new ProjectModels({
        title: title,
        description: description
    })

    Post.save()
        .then(result => {
            res.status(201).json({
                message: "Create Data Success",
                data: result
            })
        })
        .catch(err => {
            console.log('err :', err)
        })
}

exports.getAllProjectControllers = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    let totalItems;

    ProjectModels.countDocuments()
        .then(count => {
            totalItems = count
            return ProjectModels.find()
                .skip(parseInt(currentPage - 1) * parseInt(perPage))
                .limit(parseInt(perPage))
        })
        .then(result => {
            res.status(200).json({
                message: "Data Berhasil Di panggil",
                data: result,
                total_data: totalItems,
                per_page: perPage,
                current_page: currentPage,
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.getDataProjectById = (req, res, next) => {
    const ProjectId = req.params.projectId
    ProjectModels.findById(ProjectId)
        .then(result => {
            if (!result) {
                const error = new Error('Project Data tidak ditemukan')
                error.errorStatus = 404
                throw error
            }
            res.status(200).json({
                message: "Data Project Berhasil di panggil",
                data: result,
            })
        })
        .catch(err => {
            next(err)
        });
}