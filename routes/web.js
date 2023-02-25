import express from 'express'
import studentModel from '../models/Students.js'
const router = express.Router()

router.get("/", async (req, res)=>{
    try {
        const r = await studentModel.find()
        res.send(r)
        
    } catch (error) {
        console.log(error)
    }
    
})
router.post("/", async (req, res)=>{
    try {
        const doc = await studentModel.create({
            name:req.body.name,
            age:req.body.age,
            fee:req.body.fee
        })
        const r = await doc.save()
        res.status(201).send(r)
        
    } catch (error) {
        console.log(error)
    }
    
    
})

router.get("/:id", async (req, res)=>{
    try {
        const r = await studentModel.findById(req.params.id)
        res.send(r)
        
    } catch (error) {
        console.log(error)
    }
})
router.delete("/:id", async (req, res)=>{
    try {
        const r = await studentModel.findByIdAndDelete(req.params.id)
        res.status(204).send(r)
        
    } catch (error) {
        console.log(error)
    }
})
router.put("/:id", async (req, res)=>{
    try {
        const r = await studentModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument:"after"})
        res.send(r)
        
    } catch (error) {
        console.log(error)
    }
})

export default router