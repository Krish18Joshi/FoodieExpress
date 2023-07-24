const  mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
require("dotenv").config();

const URL = process.env.URL ;

async function mongoDB() {
 
    mongoose.set("strictQuery", false);
    mongoose.connect(URL, {  useNewUrlParser:true ,useUnifiedTopology:true }, async (err, res) => {
        if (err) {console.log("!!!!!!!!!!", err);}
        else {
            console.log("DataBase Connected ...");
            const FoodItems_data = await mongoose.connection.db.collection("FoodItems");
             FoodItems_data.find({}).toArray(function(err, data) {
                const FoodItems_Category =  mongoose.connection.db.collection("FoodCategory");
                FoodItems_Category.find({}).toArray(function(err, categorydata){
                    if(err){console.log("!!!!!!!!!!", err);}
                    else{
                       global.FoodItems_data_render = data ;
                       global.FoodItems_Category_render = categorydata ;
                       //console.log(FoodItems_data_render);
                   }
                })
                 
                
               
               

            });
        }


    })
  
   
  }

module.exports = mongoDB;