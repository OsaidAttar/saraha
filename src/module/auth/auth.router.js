import {Router} from "express"
import * as authController from './controller/auth.controller.js'
import { asyncHandler } from "../../services/errorHandling.js"
import  * as validator from "./auth.validation.js"
import validation from "../middelware/validation.js"
const router=Router()
router.post('/signup',validation(validator.signUpSchema),asyncHandler(authController.signUp))
router.post('/signin',validation(validator.signInSchema),asyncHandler(authController.signIn))
router.get('/confirmEmail/:token',authController.confirmEmail)
export default router