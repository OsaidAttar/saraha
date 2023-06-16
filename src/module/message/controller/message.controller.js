import messageModel from '../../../../DB/model/Message.model.js'
import userModel from '../../../../DB/model/User.model.js'
import { asyncHandler } from '../../../services/errorHandling.js'
export const getMessage=async(req,res)=>{
    
    const messageList=await messageModel.find({reciverId:req.id})
    return res.json({message:"success",messageList})
}
export const sendMessage=asyncHandler(async(req,res)=>{
    const {reciverId}=req.params
    const {message}=req.body
    const user=await userModel.findById(reciverId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const createMessage= messageModel.create({reciverId,message})
    return res.status(201).json({message:"success",createMessage})
})
export const deleteMessage=asyncHandler(async(req,res)=>{
const id =req.id
const {messageId}=req.params

const message =await messageModel.deleteOne({_id:messageId,reciverId:id})
if(message.deletedCount==0){
    return res.status(400).json({message:"invalid id message or id user"})
}
return res.status(201).json({message:"success"})
})