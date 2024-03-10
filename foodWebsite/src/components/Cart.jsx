import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from './Cartitem';
import { clearCart } from '../assets/cartSlice';


const Cart = () => {
      const dispatch = useDispatch();
    function clearaction(){
           dispatch(clearCart())
    }

 const cartItem=useSelector((store)=>store.cart.items);
 
  return (
    <div className='text-center font-mono font-extrabold text-2xl '>
    
          <p>Cart</p>

        <button className='border-black border-2 ml-2 rounded-xl bg-black text-white p-1 text-sm' onClick={clearaction} >  Clear Cart</button>
       <div className='p-5 w-1/2 flex flex-col gap-3 items-center text-lg justify-center text-center m-auto' >{
       cartItem.map(c =><Cartitem key={c.id} allitem={c} />)
       }
       {cartItem.length===0?<h3>cart is empty, add the items</h3>:null}
       </div>
    </div>
  )
}

export default Cart