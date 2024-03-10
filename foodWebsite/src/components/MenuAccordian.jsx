import React, { useState } from 'react'
import AllMenuItems from './AllMenuItems'

export const MenuAccordian = ({menusec}) => {
  const [showitem,setShowitem]=useState(false);
  function closeup(){
      setShowitem(!showitem)
  }
    console.log(menusec)
  return (
    <div className='w-6/12 m-auto bg-gray-100 my-4 p-3 flex-col shadow-lg'>
    
     <div onClick={closeup} className='flex justify-between '>
     <h3>{menusec.title} ({menusec.itemCards.length})</h3>
     <p >🔽</p>
     </div>
     {
        showitem && menusec.itemCards.map(c=><AllMenuItems key={c.card.info.id} allitem={c} />)
     }
     
    
    </div>)
    
  
}

export default MenuAccordian