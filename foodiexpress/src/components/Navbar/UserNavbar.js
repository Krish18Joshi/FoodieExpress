import React, { useState } from 'react' ;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Foodie_Express_logos_black from "../../images/Foodie_Express_logos_black.png";
import house_solid from "../../images/house_solid.svg";
import login from "../../images/login.svg";
import shoppingcart from "../../images/shoppingcart.png" ;
import order from "../../images/order.png" ;
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useCart } from '../Reducer/Reducer';
import swal from 'sweetalert';
function UserNavbar() {
  const navigate = useNavigate();
  const  [cartView,setCartView] = useState();
  let data = useCart();
  let  length = false;
  if(data.length == 0){
    length = false;
  }
  else{
    length= true;
  }
  const HandleLogout = ()=>{
    localStorage.removeItem("UserEmail");
    localStorage.removeItem("loglevel");
    localStorage.removeItem("UserName");
    localStorage.removeItem("data");
    localStorage.removeItem("authToken");
    swal(" ", "Log out ", "success");
    navigate("/Login");

  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary Main_Navbar" >
      <Container fluid>
        <Navbar.Brand to={"/"} className='Nav' style={{backgroundImage:`url(${Foodie_Express_logos_black})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"7rem",height:"7rem"}} ></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 Inner_Nav_div  Inner_Nav_div2 Inner_Nav_div_user"
            style={{ maxHeight: '100px' }}
            navbarScroll
             
          >
            <Link to={"/Home"} className='NavElements second'><img className='img_logo' src={house_solid} style={{width:"2rem" ,height:"2rem" }} /> Home</Link>
            
            <Link to={"/Order"} className='NavElements second'><img className='img_logo' src={order} style={{width:"2rem" ,height:"2rem" }} /> Order</Link>
            <Link to={"/Cart"} className='NavElements second'>
            <img className='img_logo' src={shoppingcart} style={{width:"2rem" ,height:"2rem" }} />
           {
            length? <div  className='badeg'>
              {data.length}
            </div>:<div></div>
           }
          
              Cart
         
            </Link>
            <div  onClick={HandleLogout} className='NavElements second logout'  ><img className='img_logo' src={login} style={{width:"2rem" ,height:"2rem" }} />Logout</div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
