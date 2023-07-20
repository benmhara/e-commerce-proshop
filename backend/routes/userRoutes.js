import express from 'express'
import User from '../models/userModel.js'
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
//import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(getUsers)
router.post('/login', authUser)
router.post('/logout', logoutUser)

router.get('/profile', /* protect, */ getUserProfile)
router.put('/profile', /* protect, */ updateUserProfile)
// Admin routes

router.get('/', /* protect, admin, */ getUsers)
router.delete('/:id', /* protect, admin, */ deleteUser)
router.get('/:id', /* protect, admin, */ getUserById)
router.put('/:id', /* protect, admin, */ updateUser)

export default router
