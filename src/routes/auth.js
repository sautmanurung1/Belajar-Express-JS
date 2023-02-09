import { Router } from 'express'
const router = Router()
import { RegisterUserController, LoginUserController } from '../controllers/auth'

router.post('/register', RegisterUserController)
router.post('/login', LoginUserController)
export default router