import { signInSchema, signUpSchema } from "../auth/auth.validation.js"
const dataMethod=['body','query','headers','params']
const validation =(schema)=>{
    return(req,res,next)=>{
      const validationArray=[]
      dataMethod.forEach(key=>{
          if(schema[key]){
            console.log(key);

             const validationResult=schema[key].validate(req[key],{abortEarly:false})
                if(validationResult.error){
                  validationArray.push(validationResult.error.details)
        }
    }
      })

         if(validationArray.length > 0){
          return res.json({message:"validation error ",validationArray})
         }
      
            else{
             return next()
            }

}}
export default validation