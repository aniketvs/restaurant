const express=require('express');
const router=express.Router();
const schema=require('../schema/schemapost');
router.get('/get/food', async (req,res)=>{
    try{
       const result=await schema.find();
       if(result){
       res.status(200).send(result);
       console.log(result);
       }
       else{
        res.status(400).send("something went wrong");
       }
    }catch(err){
        console.log(err);
    }
})

module.exports=router;