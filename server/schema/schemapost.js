const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const options=new Schema({
    opt:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
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
    description:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true
    },
    option:[options]
   

})

module.exports= mongoose.model('menu',foodpostmodal);