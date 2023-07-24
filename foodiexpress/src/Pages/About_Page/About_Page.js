import React ,{useEffect} from 'react'
import NavbarMain from '../../components/Navbar/Navbar';
import Foodcard from '../../components/Card/Foodcard';
import Footer from "../../components/Footer/Footer";
import About from "../../images/about_page.png";
import "./About_Page.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About_Page() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>    
    <NavbarMain/>
    <div className='Main_About' >
    
   <div className='Main_About_sub'>
            

 <img   data-aos="fade-right"
    data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className='image_about' src={About} />
    <br></br>
    <br></br>
        <div className="text" data-aos="fade-left"
    data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
            
        <span className="heading1">About us</span>
            <h2 className=" subheading1 my-4 font-bold text-3xl  sm:text-4xl ">About <span className=" subheading1span text-indigo-600">Our Company</span></h2>
            <p className="text-gray-700" data-aos="fade-right"
    data-aos-delay="550"
    data-aos-duration="550"
    data-aos-easing="ease-in-out">
            Welcome to FoodieExpress, the ultimate destination for food lovers seeking convenience and an exceptional culinary experience. We are passionate about connecting hungry customers with a diverse range of local restaurants, all at the click of a button.
            </p>
            <p className="text-gray-700"  data-aos="fade-left"
    data-aos-delay="550"
    data-aos-duration="550"
    data-aos-easing="ease-in-out">
At FoodieExpress, our mission is to revolutionize the way people order food. We believe that everyone deserves access to a wide variety of delicious cuisines, from the comfort of their own homes or offices. Our platform is designed with you in mind, providing a seamless and user-friendly experience that simplifies the entire food ordering process.</p>

  
<p className="text-gray-700"  data-aos="fade-right"
    data-aos-delay="550"
    data-aos-duration="550"
    data-aos-easing="ease-in-out">
Thank you for choosing FoodieExpress. Join us on this exciting journey as we connect you with incredible food, elevate your dining experiences, and make your cravings a reality.
</p>







          
       
       
</div>
</div>
    <Footer/></div>
    
    </>

  )
}
