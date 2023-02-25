import express from 'express'
import studentModel from '../models/Students.js'
const router = express.Router()

router.get("/", async (req, res)=>{
    const r = await studentModel.find()
    res.send(r)
    
})

export default router