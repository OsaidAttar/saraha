import  express  from "express";
import { initApp } from "./src/module/app.router.js";
import * as dotenv from 'dotenv'


dotenv.config()
const app =express()
const PORT= 3000

initApp(app,express)

app.listen(PORT,()=>{
console.log(`Example app listening on port ${PORT}!`);
})