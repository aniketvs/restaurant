const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const extras=new Schema({
     item:{
        type:String
     },
     extramoney:{
        type:Number
     }
})
const foodpostmodal=new Schema({
    types:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    description:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true
    },
    option:[],
    extra:[extras]
   

})

module.exports= mongoose.model('menu',foodpostmodal);