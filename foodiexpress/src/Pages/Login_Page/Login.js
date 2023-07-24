import React, { useState } from 'react'
import NavbarMain from '../../components/Navbar/Navbar';
import './Login.css';
import Footer from "../../components/Footer/Footer";
import {Link ,json,useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
let server = '';
export default function Login() {

let navigate =useNavigate();
  const [userData ,SetuserData] = useState({
    email:"",
    password:""
  });
  const FindUser = async(e)=>{
       //Synthetic Event
      e.preventDefault();
     
      const response  = await fetch(server+"/api/Login" ,{
        method:'POST',
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({email:userData.email,password:userData.password})
      })
      const ans = await response.json();
   
    if(!ans.success){
      swal(" ", "Invalid Value", "warning");
    }else if(ans.success){

      localStorage.setItem("UserEmail",userData.email);
      localStorage.setItem("authToken",ans.authToken);
     
      navigate("/Home");
      swal(" ", "Welcome to FoodieExpress ", "success");
    }

  }
  const UserData = async(event)=>{
SetuserData({...userData,[event.target.name]:event.target.value})
  }
  return (
    <>
          <NavbarMain/>
    <div className='Main_login_div'>
    <div className='Sub_div_login'>

      <div className='inner_div_login'>
      <h2>Login to continue</h2>
      <form className='form' onSubmit={FindUser}>
      <div class="form__input-group">
      <input class="form__input" type="text"   name='email' value={userData.email} onChange={UserData} />
      <label class="form__input-label">EMAIL</label>
      </div>
      <div class="form__input-group">
      <input class="form__input" type="text"  name='password' value={userData.password} onChange={UserData} />
      <label class="form__input-label">PASSWORD</label></div><br></br>
      <button class="button-88" role="button" type='submit'>SUMBIT</button>
      </form>
      <br></br>
      <h5>New to FoodieExpress? <Link to={"/Singup"}  className='Create_account'>Create account</Link></h5>
      
     
      </div>
    </div>
    <Footer />
    </div>
   
   


    
    </>

  )
}
