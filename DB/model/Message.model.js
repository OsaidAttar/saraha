import mongoose, {Schema,model,Types} from "mongoose";
const messageSchema =new Schema({
message:{
    type:String,
    required:true
},
reciverId:{
type:Types.ObjectId
}
},{
    timestamps:true
}
)
const messageModel=mongoose.models.Message ||model("Message",messageSchema)
export default messageModel