import React , {useEffect} from 'react'
import NavbarMain from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './FrontPage.css';
import FrontPageImage from "../images/FrontPage.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foodie from "../images/Foodie.png";
import Delivery from "../images/Delivery.png";
import About_Front from "../images/About_Front.png";
export default function () {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
    <div className='Front_Page'>

    <NavbarMain/>
    <br></br><br></br>
   <div className='Front_Page_InnerDiv'>
    <div className='Front_Page_SubDiv_left'
    data-aos="fade-right"
    data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-out"
     style={{backgroundImage:`url(${Foodie})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

    </div>
    <div className='Front_Page_SubDiv_right margin_front' data-aos="fade-left"
     data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-out"
     style={{backgroundImage:`url(${Delivery})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></div>
    
     <div className='Front_Page_SubDiv_left margin_front'
    data-aos="fade-right"
      data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-out"
     style={{backgroundImage:`url(${About_Front})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

    </div>
    <div className='Front_Page_SubDiv_right margin_front' data-aos="fade-left"
     data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-out"
     style={{backgroundImage:`url(${FrontPageImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

    </div>
   </div>
    <Footer/></div>
    
</React.Fragment>
  );
}
