import React, { useState } from 'react'
import NavbarMain from '../../components/Navbar/Navbar';
import './Login.css';
import Footer from "../../components/Footer/Footer";
import {Link ,useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
let server = '';
export default function Singup() {

  let navigate =useNavigate();
  const [userData ,SetuserData] = useState({
    name:"",
    email:"",
    password:"",
    phonenumber:"",
  });
  const CreateUser = async(e)=>{
       //Synthetic Event
      e.preventDefault();
     
      const response  = await fetch(server+"/api/Singup" ,{
        method:'POST',
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({name:userData.name,email:userData.email,password:userData.password,phonenumber:userData.phonenumber,})
      })
      const ans = await response.json();
    console.log(ans);
    if(!ans.success){
      swal(" ", "Invalid Value", "warning");
    }else if(ans.success){
     
      navigate("/Login");
      swal(" ", "Your Account is created ", "success");
    }

  }
  const UserData = async(event)=>{
SetuserData({...userData,[event.target.name]:event.target.value})
  }
  console.log(userData);
    return (
        <>
              <NavbarMain/>
        <div className='Main_login_div'>
        <div className='Sub_div_login'>
    
          <div className='inner_div_login'>
          <h2>Sign up</h2>
          <form className='form' onSubmit={CreateUser}>
          <div class="form__input-group">
          <input class="form__input" type="text" name='name' value={userData.name} onChange={UserData} />
          <label class="form__input-label">NAME</label>
          </div>
        
          <div class="form__input-group">
          <input class="form__input" type="text" name='email' value={userData.email} onChange={UserData} />
          <label class="form__input-label">EMAIL</label>
          </div>
          <div class="form__input-group">
          <input class="form__input" type="text"  name='password' value={userData.password} onChange={UserData}/>
          <label class="form__input-label">PASSWORD</label></div>
          <div class="form__input-group">
          <input class="form__input" type="text" name='phonenumber' value={userData.phonenumber} onChange={UserData}/>
          <label class="form__input-label">PHONENUMBER</label>
          </div>
     
         <br></br>
       
          <h6>
          <input className='checkbox'  type='checkbox'></input> I agree to FoodieExpress's Terms of Service, Privacy Policy and Content Policies</h6>
          <button class="button-88" role="button" type='submit'>Create account</button>
          </form>
          <br></br>
          <h5>Already have an account?<Link to={"/Login"}  className='Create_account'> Log in</Link></h5>
          
         
          </div>
        </div>
        <Footer />
        </div>
       
       
    
    
        
        </>
    
      )
}
