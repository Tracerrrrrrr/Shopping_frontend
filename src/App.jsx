import Spinner from "./components/Spinner/Spinner";
import React, { Suspense } from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
const Mid=React.lazy(()=>import('./components/Mid/Mid'))
const Account=React.lazy(()=>import('./components/Account/Account'))
const Login=React.lazy(()=>import('./components/Login/Login'))
const Cart=React.lazy(()=>import('./components/Cart/Cart'))
const Clothes=React.lazy(()=>import('./components/Clothes/Clothes'))
const Register=React.lazy(()=>import('./components/Registration/Register'))
const OrderPage=React.lazy(()=>import('./components/OrderPage/OrderPage'))
const Footer=React.lazy(()=>import('./components/Footer/Footer'))
const token=localStorage.getItem("Id");
const App=(props)=> {
  return (
 <>
 <Suspense fallback={<Spinner/>}>
    <Router>   
      <Navbar/>
      <Routes>
        <Route path='/shop' element={<Clothes/>}/>
        <Route path='/shop/order' element={<OrderPage/>}/>
        <Route path="/" element={<Mid/>}/>
        {token?<Route path="/shop/cart"element={<Cart/>}/>:<Route path="/login" element={<Login/>}/>}
        <Route path="/account" element={<Account/>}/>
        <Route path='/login/register' element={<Register/>}/>
        {token?<Route path="/cart" element={<Cart/>}/>:<Route path="/login" element={<Login/>}/>}
        </Routes>
  </Router> 
  <Footer/>
  </Suspense>
    </>
  );
}

export default App;
