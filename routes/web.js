import express from 'express'
import studentModel from '../models/Students.js'
const router = express.Router()

router.get("/", async (req, res)=>{
    try {
        const r = await studentModel.find()
        res.send({"data":r})
        
    } catch (error) {
        res.send("error")
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
        res.status(201).send({"data":r})
        
    } catch (error) {
        res.send("error")
    }
    
    
})

router.get("/:id", async (req, res)=>{
    try {
        const r = await studentModel.findById(req.params.id)
        res.send({"data":r})
        
    } catch (error) {
        res.send("error")
    }
})
router.delete("/:id", async (req, res)=>{
    try {
        const r = await studentModel.findByIdAndDelete(req.params.id)
        res.status(204).send({"data":r})
        
    } catch (error) {
        res.send("error")
    }
})
router.put("/:id", async (req, res)=>{
    try {
        const r = await studentModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument:"after"})
        res.send({"data":r})
        
    } catch (error) {
        res.send("error")
    }
})

export default router