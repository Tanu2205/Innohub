const express=require("express");
const app=express();
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
const mongoose = require('mongoose');
const listing=require("./model/listing.js");
//const user=require("./model/user.js");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/innohub');
}
const schema=mongoose.Schema({name:String,email:String,password:String});
const user=mongoose.model("user",schema);
const list=mongoose.model("StartupList");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
const path=require("path");
const ejsmate=require("ejs-mate");
app.engine("ejs",ejsmate);
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
main().then(()=>{
    console.log("Connected to db");
}).catch(err=>{
    console.log(err);
})
app.listen(8080,()=>{
    console.log("Working");
})
async function find(){
    let data=await list.find();
    return data;
};
app.get("/innohub/homepage",async(req,res)=>{
    let d=await find();
    res.render("listings/index.ejs",{d});
})
app.get("/innohub/user",async(req,res)=>{
    res.render("listings/user.ejs");
})
app.post("/innohub",async(req,res)=>{
    let {name,email,password}=req.body;
    const p={name,email,password};
    const newuser=new user(p);
    newuser.save();
    console.log(p);
    res.redirect("/innohub/homepage");
})
