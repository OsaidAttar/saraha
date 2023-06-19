import {Router} from 'express'
import * as userController from './controller/user.controller.js'
import { auth } from '../middelware/auth.middelware.js'
import { asyncHandler } from '../../services/errorHandling.js'
import fileUpload, { HME, fileValidation } from '../../services/multer.js'
const router =Router()
router.get('/profile',auth,asyncHandler(userController.profile))
router.patch('/profilePicture',auth,fileUpload(fileValidation.image).single('image'),HME,asyncHandler(userController.profilePicture))
//router.patch('/profilePicture',auth,fileUpload(['application/pdf']).single('image'),HME,asyncHandler(userController.profilePicture))

export default router