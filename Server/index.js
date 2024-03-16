const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const ProductModel=require('./Models/Product')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://ketann682:ES5ET4Grarj7aQwB@cluster0.hxaffr8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database is connected..."));

app.get('/get', (req, res) => {
    ProductModel.find().then(result => res.json(result))
})

app.post('/add', (req,res)=>{
    const name=req.body.name;
    ProductModel.create({
        name:name,
        price:50,
        description:"product"}
    ).then(result=>res.json(result))
}) 


app.listen(3001,()=>{
    console.log("server is running")
})