import React from 'react'
import "./ProfilePage.css";
import UserNav from "../../components/Navbar/UserNavbar";
const  mongoose = require('mongoose');


export default function ProfilePage() {
// const GetUserData = async()=>{
//     // mongoose.set("strictQuery", false);
//     // mongoose.connect(URL, {  useNewUrlParser:true ,useUnifiedTopology:true }, async (err, res) => {
//     //     if (err) {console.log("!!!!!!!!!!", err);}
//     //     else {
//     //         console.log("DataBase Connected ...");
//     //         const FoodItems_data = await mongoose.connection.db.collection("FoodItems");
//     //          FoodItems_data.find({}).toArray(function(err, data) {
//     //             if(err){console.log("!!!!!!!!!!", err);}
//     //              else{
//     //                 //console.log(data);
//     //             }
               

//     //         });
//     //     }
  


//     })
// }

  return (
    <>
    <UserNav/>
         <div></div>
    </>
   
  )
}
