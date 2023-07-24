import React ,{useState ,useEffect}from 'react';
import "./Order_Page.css"
import UserNavBar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer/Footer";
let server = '';
export default function Order_Page() {

  const [orderData, setorderData] = useState({})
  const fetchMyOrder = async () => {
     
      await fetch(server+"/api/myOrderData", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              email:localStorage.getItem('UserEmail')
          })
      }).then(async (res) => {
          let response = await res.json()
          await setorderData(response)
      })

  }

  useEffect(() => {
      fetchMyOrder()
  }, [])
console.log(orderData);
  return (
    <div className='Main_Cart_Page'>
    <UserNavBar />
    <div className='Inner_div_Cart_Page'>
   <h2>Order's</h2>
   <hr style={{marginLeft:"20%" , marginRight:"20%"}}></hr>
   <div className='container1'>
                <div className='row1'>
 {orderData !== {} ? Array(orderData).map(data => {
   return (
     data.orderData ?
data.orderData.order_data.slice(0).reverse().map((item) => {
   
       return (
        <div className='main_order'>{
           item.map((arrayData) => {
           
               return (
                   <div  >
                 {arrayData.Order_date ? 
                 <div className='m-auto mt-6 date'>

          {data = arrayData.Order_date}
          <hr />
                            </div> :

  
               <div className="main_card_order" style={{ width: "16rem", maxHeight: "360px" }}>

               <div className="card-body">
                <h5 className="card-title">{arrayData.name}</h5>
               <div className='container w-100 p-0' style={{ height: "38px" }}>
                 <span className='m-1'>{arrayData.qty}</span>
          <span className='m-1'>{arrayData.size}</span><br></br>
             <span className='m-1'>{data}</span><br></br>
     <div className=' d-inline ms-2 h-100 w-20 fs-5' >  ₹{arrayData.price}/-
              </div>
            </div>
         </div>
                                                                                               
      </div>

 
       }
  </div>
     )
    })
   
 }</div>)}) : "") }) : ""}
            </div>
 </div>
 </div>
   
    
    <Footer />
    </div>
  )
}
