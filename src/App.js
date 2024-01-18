
import './App.css';
import Allcatogory from './components/Allcatogory/Allcatogory';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import Men from './components/men/Men';
import Wommen from './components/wommen/Wommen';
import { createContext, useState } from 'react';
import { Product } from './components/Product';
import Productview from './Productview';
import Login from './Login/Login';
import Registration from './components/Registration';
import Cart from "./components/Cart/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './components/Admin-section/Admin';
import Productsadmin from './components/Products-admi n/Productsadmin';
import EditProducts from './components/Products-admi n/EditProducts';
import CostomersAdmin from './components/Admin-section/CostomersAdmin';
import AddProduct from './components/Products-admi n/AddProduct';
import DashboardAdmin from './components/Products-admi n/DashboardAdmin';
import AdminLogin from './components/Admin-section/AdminLogin';
import axios from 'axios'
// import { create } from '../../../Backend/Models/productSchema';


export const Axios = axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
  headers:{
    "Content-Type":"application/json",
    Authorization: localStorage.getItem('jwt'),
  }
})

export  const userContext=createContext();
function App() {
const [product,setProduct]=useState(Product); 
 //Registration 
const [user,setUser]=useState([]);


//Login 

 const [login,setLogin]=useState(false);


 
 //Add to cart section

 const [cart,setCart]=useState([]);

 //BY product

 const [byProduct ,setByProduct]=useState([]);

  return (



    <>
       <userContext.Provider  value={{product, setProduct,user,setUser,login,setLogin,cart,setCart,byProduct,setByProduct}} >


      
     <Routes>
       
      <Route path='/' element={<Home/>}></Route>
      <Route path='/allcatogory' element={<Allcatogory/>}></Route>
      <Route path='/men' element={<Men/>}></Route>
      <Route path='/wommen' element={<Wommen/>}></Route>   
     <Route path="/view/:id" element={<Productview/>}></Route>
     <Route path='/login'  element={<Login/>}></Route>
     <Route path='/registaration' element={<Registration/>}></Route>
     <Route  path='/cart' element={<Cart/>}></Route>
     <Route path='/adminLogin' element={<AdminLogin/>}> </Route>
     <Route path='/Adminsection' element={<Admin/>}></Route>
     <Route path='/products' element={<Productsadmin/>}></Route>
     <Route path='/adminedit/:id'  element={<EditProducts/>}></Route>
      <Route path='/Costomers' element={<CostomersAdmin/>}></Route>
      <Route path='/addproduct' element={<AddProduct/>}></Route>
      <Route path='/dashboard' element={<DashboardAdmin/>}></Route>
     
 
     </Routes>
     </userContext.Provider>
     <ToastContainer/>
    </>
    
  );
}

export default App;
