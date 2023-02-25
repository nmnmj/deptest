import express from "express"
import connectDB from "./db/mongoconnectin.js"
import web from './routes/web.js'
const app = express()
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
connectDB("mongodb+srv://naman:nmnjay@cluster1.siszk7a.mongodb.net/?retryWrites=true&w=majority")
app.use("/", web)

app.listen(3000, ()=>{
    console.log("port")
})