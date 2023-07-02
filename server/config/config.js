const mongoose = require('mongoose');

const DB="mongodb://127.0.0.1:27017/foodies";
mongoose.connect(DB).then(()=>{
    console.log('db is connected');
}).catch((err)=>{
    console.log(err);
})