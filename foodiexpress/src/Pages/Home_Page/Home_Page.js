import React, { useState ,useEffect, useReducer, useContext} from 'react'
import UserNavBar from "../../components/Navbar/UserNavbar";
import "./Home_Page.css";
import Card from "../../components/Card/Foodcard";
import Footer from "../../components/Footer/Footer";
import FOODIEEXPRESS from "../../images/FOODIEEXPRESS.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

let server = '';
export default function Home_Page() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // useCallback , useContext IMP Paad lena ;
  const [FoodData ,setFoodData] = useState([]);
  const [FoodCategory ,setFoodCategory] = useState([]);
  
  const GetData = async ()=>{
    let responseData = await fetch(server+"/api/FoodData" ,{
      method:"POST" ,
      headers:{
        'Content-Type': 'application-json'
      }
    });
    responseData = await responseData.json();
    setFoodData(responseData[0]);
    setFoodCategory(responseData[1]);
  } 
  useEffect(()=>{
    GetData();
  },[]);
  const [search, setSearch] = useState("");
  return (
    <div className='Home_page'>

        <UserNavBar /><br></br>
        <div className='Main_div_Home_Page'>
        <div  data-aos="zoom-in"
    data-aos-delay="200"
    data-aos-duration="600"
    data-aos-easing="ease-out"><img className='heading' src={FOODIEEXPRESS}/>
  </div>
  <div className='SearchBar' 
   data-aos="fade-right"
    data-aos-delay="300"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
  >
    <div class="search-local">
	<input  type="search" placeholder=""  value={search} onChange={(e) => { setSearch(e.target.value) }}/>
	<button 
   data-aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
  >
		SUMBIT
	</button>
</div>
  </div>
  <div className='SearchBox'>

  { search  === "" ? <div></div>  : <div className='Search_Items'> {FoodData.filter((item)=>
  (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems=>{
                
                return(
                  <Card foodItem = {filterItems} Option ={filterItems.options[0]}/> 
                
                )
                
              } )}</div>}

    
  </div>
        <br></br>
        {
          FoodCategory !== [] ? FoodCategory.map((data)=>{
            return (
              <div style={{textAlign:"left"}}>
              <div key={data.id}> <h3>{data.CategoryName}</h3>
              </div>
              <hr className='hr1' />
              <div className='Main_card_div'>
             { FoodData !==[]? FoodData.filter((item)=>
              item.CategoryName  === data.CategoryName).map(filterItems=>{
                
                return(
                  
                  <Card foodItem = {filterItems} Option ={filterItems.options[0]}/> 
                
                )
                
              } ) :<div>No Data</div> }</div>
              </div>
            );
          }) : <div>bye</div>
        }
   
          
        </div>
        <Footer/>
 
    </div>
  )
}
