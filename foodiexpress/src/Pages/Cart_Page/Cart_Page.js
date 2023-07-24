import React ,{useEffect}from 'react'
import UserNavBar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer/Footer";
import { useCart, useDispatchCart } from '../../components/Reducer/Reducer';
import Delete from '../../images/delete.png';
import EMPTY from '../../images/EMPTY.png';
import "./Cart_Page.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
let server = "";
export default function Cart_Page() {
  const navigate = useNavigate();
  let data = useCart();
  let dispatch = useDispatchCart();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  if (data.length === 0) {
    return (
      <div className='Main_Cart_Page'>
      <UserNavBar />
      <div className='Inner_div_Cart_Page'>
      <div className='EMPTY2' data-aos="zoom-out"
    data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">Your Cart is Empty !<br></br>
      <img src={EMPTY} className='imgempty'/>
      </div>
      </div>
     
      
      <Footer />
      </div>
    )
  }
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("UserEmail");
    let response = await fetch(server+"/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
   
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
    swal(" ", "Order Successful", "success");
    navigate("/Order")
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div className='Main_Cart_Page'>
    <UserNavBar />
    <div>


<div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
  <table className='table table-hover '>
    <thead className=' text-success fs-4'>
      <tr>
        <th scope='col' >No</th>
        <th scope='col' >Name</th>
        <th scope='col' >Quantity</th>
        <th scope='col' >Option</th>
        <th scope='col' >Amount</th>
        <th scope='col' ></th>
      </tr>
    </thead>
    <tbody>
      {data.map((food, index) => (
        <tr>
          <th scope='row' >{index + 1}</th>
          <td >{food.name}</td>
          <td>{food.qty}</td>
          <td>{food.size}</td>
          <td>{food.price}</td>
          <td ><button type="button" className="btn p-0"  onClick={() => {  swal(" ", "Deleted", "success"); dispatch({ type: "REMOVE", index: index }) }} >

          <img className='img_logo' src={Delete} style={{width:"2.8rem" ,height:"2.2rem" }} />
          </button> </td></tr>
      ))}
    </tbody>
  </table>
  <br></br>
  <div><h1 className='fs-2'>Total Price: {totalPrice}/- </h1></div>
  <div>
    <button className='btn btn52 bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
  </div>
</div>



</div>
   
    
    <Footer />
    </div>
  )
}
