import {Router}from "express"
import * as messageController from './controller/message.controller.js'
import { auth } from "../middelware/auth.middelware.js"
const router=Router()
router.get('/',auth,messageController.getMessage)
router.post('/:reciverId',messageController.sendMessage)
router.delete('/:messageId',auth,messageController.deleteMessage)
export default router