import React from 'react' ;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Foodie_Express_logos_black from "../../images/Foodie_Express_logos_black.png";
import house_solid from "../../images/house_solid.svg";
import question from "../../images/question.png";
import login from "../../images/login.png";
import Singup from "../../images/login.svg";

import './Navbar.css';

function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary Main_Navbar" >
      <Container fluid>
        <Navbar.Brand to={"/"} className='Nav' style={{backgroundImage:`url(${Foodie_Express_logos_black})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"7rem",height:"7rem"}} ></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 Inner_Nav_div"
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            <Link to={"/"} className='NavElements'><img className='img_logo' src={house_solid} style={{width:"2rem" ,height:"2rem" }} /> Home</Link>
           
            <Link to={"/About"} className='NavElements'>
            <img className='img_logo' src={question} style={{width:"2.8rem" ,height:"2.2rem" }} />
              About
            </Link>
            <Link to={"/Login"} className='NavElements' ><img className='img_logo' src={login} style={{width:"2rem" ,height:"2rem" }} />Login</Link>
            <Link to={"/Singup"} className='NavElements' ><img className='img_logo' src={Singup} style={{width:"2rem" ,height:"2rem" }} />Singup</Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
