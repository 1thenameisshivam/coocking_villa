import { useState } from "react";
import { LOGO_LINK } from "../assets/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../assets/useOnlineStstus";
import { useSelector } from "react-redux";



const Header =()=>{
  const status=useOnlineStatus();
  const [loginbtn,setLoginbtn]=useState("LOGIN");
  const cartItem = useSelector((store)=> store.cart.items);
    return(
      <div className='header' >
           <div className='logo' >
             <img src={LOGO_LINK} alt='LOGO' />
           </div>
           <div className='navelement' >
                <ul>
                 <li>Online Status: {status===false?"🔴":"🟢"}</li>
                 <li ><Link to="/" >HOME</Link></li>
                 <li ><Link to="/aboutus">ABOUT</Link></li>
                 <li ><Link to="/contactus" >CONTACT</Link></li>
                 <li><Link to="/cart">CART ({cartItem.length})</Link> </li>
                 <button className="loginbtn" onClick={()=>{
                      loginbtn === "LOGIN"?setLoginbtn("LOGOUT"):setLoginbtn("LOGIN");
                 }} >{loginbtn}</button>
                </ul>
           </div>
     </div>
     )
   }
   export default Header;