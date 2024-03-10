import React from 'react'
import { CDN_LINK } from '../assets/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../assets/cartSlice';

export const AllMenuItems = ({allitem}) => {
  const dispatch = useDispatch();
  function handleclick(item){
    dispatch(addItem(item))
  }
    
  return (
    (<div className='flex bg-white items-center px-3 justify-between border-b-2 mt-2' >
    <div className=' p-2 m-2 text-left'>
        <p className='font-semibold py-2'>{allitem.card.info.name} -Rs {
          allitem.card.info.defaultPrice?
          allitem.card.info.defaultPrice/100: 
          allitem.card.info.price/100 } 
        </p>
        <p className='font-thin' >{allitem.card.info.description}</p>
        <button className='bg-black text-white p-2 px-4 rounded  top-0 left-96'
          onClick={()=>handleclick(allitem.card.info)}
        >ADD 🛒</button>
    </div>
    
    <img className=' w-1/6 h-1/6 rounded' src={CDN_LINK+allitem.card.info.imageId}/>
    
    

    </div>)
    
  )
}
export default AllMenuItems;