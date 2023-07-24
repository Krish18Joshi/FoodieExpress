const express = require('express');
require("dotenv").config();
const router = express.Router();
const user = require("../models/User");
const {body , validationResult} = require('express-validator');
//!!USE OF JWT TOKEN
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const jwtsecret = "HellIamKrishjoshiandiamfromchandigarhuniversity";

router.post("/Singup",  body('email',"Incorrect Email").isEmail() ,body('password',"Weak Password").isLength({min:6}),async(req , res )=>{
 const salt = await bcrypt.genSalt(10);
 let securepassword = await bcrypt.hash(req.body.password,salt);
const errors = validationResult(req);
if(!errors.isEmpty()){
   return res.status(400).json({errors: errors.array()});
}
     try{
     await user.create({
        name:req.body.name,
        email:req.body.email,
        password:securepassword,
        phonenumber:req.body.phonenumber,
      })
      res.json({success:true});
     }catch(e){
        console.log(e);
        res.json({success:false});
     }
})
router.post("/Login", body('email',"Incorrect Email").isEmail() ,body('password',"Weak Password").isLength({min:6}), async(req , res )=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
   }
        let email= req.body.email;
        let  password = req.body.password;
        try{
        let UserData = await user.findOne({email})
        if(!UserData){
         return res.status(400).json({errors:"Enter correct details"});

        }
    
        const pwd = await bcrypt.compare(req.body.password , UserData.password )
        if(!pwd){
         return res.status(400).json({errors:"Enter correct details"});
        }
        const data = {
        user :{
         id: UserData.id
        } 
        }
        const authToken = JWT.sign(data,jwtsecret);
          return res.json({success:true , authToken:authToken});
        }catch(e){
           console.log(e);
           res.json({success:false});
        }
   })
router.post('/getuser', fetch, async (req, res) => {
      try {
          const userId = req.user.id;
          const user = await User.findById(userId).select("-password") // -password will not pick password from db.
          res.send(user)
      } catch (error) {
          console.error(error.message)
          res.send("Server Error")
  
      }
  })

module.exports = router;