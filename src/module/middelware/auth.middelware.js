import userModel from "../../../DB/model/User.model.js"
import { verifyToken } from "../../services/generateAndVerifyToken.js"

export const auth =async(req,res,next)=>{
    

        const {authorization} = req.headers
        if(!authorization?.startsWith(process.env.BEARARDATA)){
            return res.json({message:"Invalid authorization"})
        }
        const token = authorization.split(process.env.BEARARDATA)[1]
        if(!token){
            return res.json({message:"Invalid token"})
    
        }
        const decoded=verifyToken(token)
        const authUser=await userModel.findById(decoded.id).select("userName email")
        if(!authUser){
            return res.status(401).json({message:"not registered account"})
    
        }
        req.id=decoded.id
        
       next()
    }