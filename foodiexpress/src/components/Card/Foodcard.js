import React, { useEffect, useRef, useState } from 'react'
import './Foodcard.css';
import { useDispatchCart ,useCart } from '../Reducer/Reducer';
import swal from 'sweetalert';
export default function Foodcard(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const options_data1 =[{ key:1,value:"HALF"},{key:2,value:"FULL"}];
    const options_data2 =[{ key:1,value:"1"},{ key:2,value:"2"},{ key:3,value:"3"},{ key:4,value:"4"},{ key:5,value:"5"},{ key:6,value:"6"},
    { key:7,value:"7"},
    { key:8,value:"8"},
    { key:9,value:"9"},
    { key:10,value:"10"},];
    let foodItem = props.foodItem;
    const Options = props.Option;
    let priceOption = Object.keys(Options);
   const priceRef = useRef();
    const [quantity ,Setquantity] = useState(1);
    const [size ,Setsize] = useState("");

    let price  = quantity * parseInt(Options[size]);
    useEffect(()=>{
        Setsize(priceRef.current.value);
    },[])
const HandleAddToCart = async() =>{
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
        if (food.size === size) {
          swal(" ", "Added", "success");
          await dispatch({ type: "UPDATE",id:foodItem._id , name:foodItem.name,qty: quantity , size:size,price:price})
          return
        }
        else if (food.size !== size) {
          swal(" ", "Added", "success");
          await dispatch({ type: "ADD", id:foodItem._id , name:foodItem.name,qty: quantity , size:size,price:price })
          console.log("Size different so simply ADD one more to the list")
          return
        }
        return
      }
      swal(" ", "Added", "success");
    await dispatch({type:"ADD" ,id:foodItem._id , name:foodItem.name,qty: quantity , size:size,price:price })
   
}
      return (
    <div className='Upper_card_div' style={{backgroundImage:`url(${foodItem.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}>
    <div className='Food_card_img'>
        
    </div>
        <div className='inner_card_div' >
        <h4>{foodItem.name}</h4>
            <p className='card_para' > ₹ {price}/-</p>
            <div className='Adding_items'>
            <select className='selection_box' placeholder='size' 
            ref ={priceRef}  
             onChange={(e)=>{
                Setsize(e.target.value);
               
            }}> 
          
            {
                priceOption.map((data)=>{
                    return(
                        <option key={data} value={data} >{data}</option>
                    )
                })
            }
                
            </select>
            <select className='selection_box' placeholder=''  onChange={(e)=>{
                Setquantity(e.target.value);
            }}> 
         
            {
                options_data2.map((data)=>{
                    return(
                        <option key={data.key}>{data.value}</option>
                    )
                })
            }
                
            </select>
            <button className='Add_button_card button-19' onClick={HandleAddToCart}>ADD</button>
            </div>

           
        </div>
    </div>
  )
}
