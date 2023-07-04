const express=require('express');
const router=express.Router();
const schema=require('../schema/schemapost');
router.get('/get/food/:val?', async (req,res)=>{
    
    try{
        let query={};
        if(req.params.val){
            query = {
                types: { $regex: req.params.val }
              };
        }
       const result=await schema.find(query);
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