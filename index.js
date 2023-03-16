import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import express from "express"
import connectDB from "./db/mongoconnectin.js"
import web from './routes/web.js'
const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended:false}))

connectDB(process.env.DB_URL)
app.use("/", web)

app.listen(3000, ()=>{
    console.log("port" + process.env.DB_URL)
})