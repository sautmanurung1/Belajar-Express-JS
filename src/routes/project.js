import { Router } from 'express'
import { body } from 'express-validator'
import { CreateProjectsControllers, getAllProjectControllers, getDataProjectById } from '../controllers/projects'
const router = Router()

router.post('/post', [body('title').isLength({ min: 5 }).withMessage('input title tidak sesuai'),body('description').isLength({ min: 5 }).withMessage('input description tidak sesuai')], CreateProjectsControllers)
router.get('/posts', getAllProjectControllers)
router.get('/post/:ProjectId', getDataProjectById)
export default router