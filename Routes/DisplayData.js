const express = require('express');
require("dotenv").config();
const router = express.Router();

router.post('/FoodData', (req , res )=>{
    try{
res.send([global.FoodItems_data_render ,global.FoodItems_Category_render]);
// console.log(global.FoodItems_data_render);
    }catch(e){
        console.log(e);
    }
})


module.exports = router;