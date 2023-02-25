import express from "express"
import connectDB from "./db/mongoconnectin.js"
const app = express()

connectDB("mongodb+srv://naman:nmnjay@cluster1.siszk7a.mongodb.net/?retryWrites=true&w=majority")
app.use("/",(req, res)=>{
    res.json({
        name:"raj"
    })
})

app.listen(3000, ()=>{
    console.log("port")
})