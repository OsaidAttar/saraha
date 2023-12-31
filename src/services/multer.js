import multer from 'multer'
export const HME=(err,req,res,next)=>{
    if(err){
return res.status(400).json({message:"multer error"})
}else{
    next()
}
}
 export const fileValidation={
    image:['image/png','image/jpeg','image/gif'],
    file:['application/pdf']
}
function fileUpload(custumValidation=[]){
    const storage=multer.diskStorage({})


    function fileFilter(req,file,cb){
        if(custumValidation.includes(file.mimetype)){
        
       cb(null,true)
      
    }else{
        cb("invalid format",false)
    }}
    const upload =multer({fileFilter,storage})
    return upload
}

export default fileUpload