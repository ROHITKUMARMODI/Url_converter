import express from 'express';
import mongoose from "mongoose"
import {shortUrl,getOriginalUrl} from "./controllers/url.js"
const app = express()

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://code:mastery123@cluster0.vaepo6k.mongodb.net/",{dbName:"NodeJs_Mastery_Course"})
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.render('index.ejs',{shortUrl :null})
})

app.post("/short",shortUrl)

//REDIRECT TO ORIGINAL URL BY USING SHORT URL
app.get("/:shortCode",getOriginalUrl)
app.listen(1564,()=>{
    console.log("server is running in the port 1564")
})