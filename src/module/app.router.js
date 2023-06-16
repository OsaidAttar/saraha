import connectDB from '../../DB/connection.js'
import AuthRouter from './auth/auth.router.js'
import userRouter from './user/user.router.js'
import MessageRouter from './message/message.router.js'
export const initApp=(app,express)=>{
    app.use(express.json())
    connectDB()
    app.use('/auth',AuthRouter)
    app.use('/user',userRouter)
    app.use('/message',MessageRouter)
    app.use('*',(req,res)=>{
        return res.json({message:"page not found"})
    })
}