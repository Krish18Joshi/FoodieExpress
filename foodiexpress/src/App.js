import './App.css';
import FrontPage from './screens/FrontPage';
import Login from '../src/Pages/Login_Page/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About_Page from './Pages/About_Page/About_Page';
import Singup from './Pages/Login_Page/Singup';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Home_Page from './Pages/Home_Page/Home_Page';
import Cart_Page from './Pages/Cart_Page/Cart_Page';
import Order_Page from './Pages/Order_Page/Order_Page';
import Reducer from "./components/Reducer/Reducer";
function App() {
  return (
   
    <div className="App">
   <Reducer>
   <Router>
     <Routes>
<Route  path='/' element={<FrontPage/>} ></Route>
<Route  path='/Login' element={<Login/>} ></Route>
<Route  path='/About' element={<About_Page/>} ></Route>
<Route  path='/Singup' element={<Singup/>} ></Route>
<Route  path='/Profile' element={<ProfilePage/>} ></Route>
<Route  path='/Home' element={<Home_Page/>} ></Route>
<Route  path='/Cart' element={<Cart_Page/>} ></Route>
<Route  path='/Order' element={<Order_Page/>} ></Route>
    </Routes>
    
    </Router>
   </Reducer>
    
    </div>
  );
}

export default App;
