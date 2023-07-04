const express = require('express');
const router = express.Router();
const picmulter = require('../middleware/picmulter');
const schema=require('../schema/schemapost');
router.post('/add/item',picmulter,async (req,res)=>{
   const data=new schema({
      types:req.body.types,
    name:req.body.name,
    description:req.body.description,
    pic:req.file.path,
    option: req.body.option
   });
   const  result=await data.save();
   res.status(200).send(result);
   console.log(result.pic);
})
module.exports=router;