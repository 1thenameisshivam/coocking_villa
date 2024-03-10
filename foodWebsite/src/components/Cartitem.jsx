import React from 'react'
import { CDN_LINK } from '../assets/constants'

export const Cartitem = ({allitem}) => {
  
    
  return (
    (<div className='flex bg-white items-center px-3 justify-between border-b-2 mt-2' >
    <div className=' p-2 m-2 text-left'>
        <p className='font-semibold py-2'>{allitem.name} -Rs {
          allitem.defaultPrice?
          allitem.defaultPrice/100: 
          allitem.price/100 } 
        </p>
    </div>
    
    <img className=' w-1/6 h-1/6 rounded-lg m-1 ' src={CDN_LINK+allitem.imageId}/>
    
    

    </div>)
    
  )
}
export default Cartitem;