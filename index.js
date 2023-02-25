import express from "express"
const app = express()

app.use("/",(req, res)=>{
    res.json({
        name:"raj"
    })
})

app.listen(3000, ()=>{
    console.log("port")
})