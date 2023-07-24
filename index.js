const express = require('express');
require("dotenv").config();
const mongoDB = require("./database");
const app = express()
const port = process.env.PORT || 5002;
const user_route_UserData =  "./Routes/Createuser";
const user_route_FoodData = "./Routes/DisplayData";
const user_route_OrderData ="./Routes/OrderData";
const cors = require("cors");
const  path = require('path') ;

app.use(cors());
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
})
app.use(express.json())
app.get('/', (_,res) =>{
  res.sendFile(path.join(__dirname,"./foodiexpress/build/index.html")),
  (error)=>{
    res.status(500).send(error)
  }
  })



app.use('/api',require(user_route_UserData));
app.use('/api',require(user_route_FoodData));
app.use('/api',require(user_route_OrderData));
app.use(express.static(path.join(__dirname,"./foodiexpress/build")));
app.get("*", (_,res) =>{
res.sendFile(path.join(__dirname,"./foodiexpress/build/index.html")),
(error)=>{
  res.status(500).send(error)
}
})

app.listen(port, async() => {
  console.log(`Listening on port ${port}`);
  await mongoDB();
  
})