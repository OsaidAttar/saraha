
import userModel from "../../../../DB/model/User.model.js"

import { generateToken, verifyToken } from "../../../services/generateAndVerifyToken.js"
import { hash,compare } from "../../../services/hashAndCompare/hashAndCompare.js"
import { sendEmail } from "../../../services/sendEmail.js"
import { profile } from "../../user/controller/user.controller.js"
import { signInSchema, signUpSchema } from "../auth.validation.js"
export const signUp=async (req,res)=>{
   

        const{userName,email,password}=req.body
    
        const user=await userModel.findOne({email})
        if(user){
            return res.status(409).json({message:"already email exists"})
    
        }
        const hashPassword=hash(password)
        const token=generateToken({email},process.env.EmailToken)
        const link =`http://localhost:3000/auth/confirmEmail/${token}`
       await sendEmail(email,'confirm email',`<a href="${link}">verify email</a>`)
    const createUser=await userModel.create({userName,email,password:hashPassword})
     
        return res.status(201).json({message:"success register",user:createUser})
    
   
}
export const confirmEmail=async (req,res)=>{
    const {token}=req.params
    const decoded=verifyToken(token,process.env.EmailToken)
    const user=await userModel.updateOne({email:decoded.email},{confirmEmail:true})
    if(!decoded){
        return res.json({message: "Invalid token"})
    }
    return res.status(201).redirect('https://www.google.com')
}
export const signIn=async (req,res)=>{
   

        const {email,password}=req.body
        
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).json({message:" email not exists"})
        
        }
        
        else{
           
            if(!user.confirmEmail ){
                return res.json({message:"plz verify confirm email"})
            }
            const match =compare(password,user.password)
            if(!match){
                return res.json({message:"incorrect email or password"})
        
            }else{
                const token =generateToken({id:user._id})
                return res.status(200).json({message:"success",token})
        
            }
        }
    }
