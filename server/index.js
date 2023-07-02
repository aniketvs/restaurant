const express= require('express');
const app= express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
require('./config/config');
const foodpost=require('./routes/foodpost');
app.use(foodpost);

const getfood=require('./routes/getfood');
app.use(getfood);

app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is connected !");
    }
})