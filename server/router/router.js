const express = require('express');
const Employee = require('../model/employee');
const router = express.Router();

router.post('/employee', async(req,res)=>{
    try{
    const user = new Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        })
       await user.save();
        res.send(user);
    }catch(err){
        res.status(400).send({message:err.message});
    } 
            
})

router.get('/employee',async(req,res)=>{
    try{
    const user = await Employee.find();
    res.send(user);
}catch(err){
    res.status(400).send({message:err.message});
} 
})

router.put('/employee/update/:id',async(req,res)=>{
    try{
    const user = await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(user);
}catch(err){
    res.status(400).send({message:err.message});
} 
})

router.delete('/employee/delete/:id',async(req,res)=>{
    try{
    const user = await Employee.findByIdAndDelete(req.params.id);
    res.send(user);
}catch(err){
    res.status(400).send({message:err.message});
} 
})

module.exports = router;