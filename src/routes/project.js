const express = require('express')
const { body } = require('express-validator')
const ProjectsControllers = require('../controllers/projects')
const router = express.Router()

router.post('/post', [body('title').isLength({ min: 5 }).withMessage('input title tidak sesuai'),body('description').isLength({ min: 5 }).withMessage('input description tidak sesuai')], ProjectsControllers.CreateProjectsControllers)
router.get('/posts', ProjectsControllers.getAllProjectControllers)
router.get('/post/:ProjectId', ProjectsControllers.getDataProjectById)
module.exports = router