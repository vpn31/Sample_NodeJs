const express=require('express');
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const app=express();
const port=8081;

dotenv.config();

app.set('view engine','ejs');

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER}`)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.render("home");
});

app.listen(port,(err)=>{
    if(err)
        console.log(err);
    console.log("Server is listening at port",port);
})
