import mongoose, {Schema,model,Types} from 'mongoose'
const userSchema=new Schema({
userName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
},
confirmEmail:{
    type:Boolean,
    default:false
},
profilePicture:{
    type:String
},
}
,{
 timestamps:true   
})
const userModel=mongoose.models.User|| model('User',userSchema)
export default userModel