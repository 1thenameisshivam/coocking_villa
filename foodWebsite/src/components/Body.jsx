import resobj from "../assets/mokdeta";
import Cards,{Resturentratings} from "./Cards";
import { useState , useEffect,useRef} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../assets/useOnlineStstus";
import NOinternet from "./NOinternet";

const Body=()=>{
  
  const Resturentdelivery=Resturentratings(Cards);
   
  const [filteredres,setFilteredres]=useState([]);
  useEffect(()=>{
       fetchData();
  },[])
  

    const srhid=useRef();

   const [allres , setAllres]=useState(resobj)
   const [srchlist,setSrchlist]=useState("");


  const fetchData = async ()=>{
     const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
     const json= await data.json();
     
     var allResturentList=json.data?.cards[1
    ]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log(allResturentList)
     setFilteredres(allResturentList);
     setAllres(allResturentList);
  }

  // if(filteredres.length === 0){
  //   return <Shimmer/>
  // }

   const onlinestatus=useOnlineStatus();

   if(onlinestatus===false){
    return(
     <NOinternet/>
    )
   }

   
    return filteredres.length === 0?<Shimmer/>:(
      <div className='body' >
         <div className='filter text-center my-5 '  >
          
          <input className="rounded-xl  border-gray-950 border-2 p-1 " type="text" ref={srhid} value={srchlist} onChange={(e)=>setSrchlist(e.target.value)}></input>
          <button
             className="rounded-lg border-2 bg-blue-500 px-2 p-1 mx-1"
            onClick={()=>{
               console.log(srhid.current.value)
              const searchedres=allres.filter((res)=>res.info.name.toLowerCase().includes(srchlist.toLowerCase()))
              setFilteredres(searchedres);
            }} 
          >Search</button>

         <button className="allres
         rounded-lg border-2 px-2 p-1 mx-1 bg-indigo-500" 
            onClick={()=>{
              setFilteredres(allres)
            }} 
         >All Resturents</button>


          <button className="topres
          rounded-lg border-2 px-2 p-1 mx-1 bg-indigo-500" 
             onClick={()=>{
              const filteredresturentlist=filteredres.filter(
                (res) => res.info.avgRating>4.2);
                setFilteredres(filteredresturentlist);
             }}
          >Top Resturents</button>


         </div>
         <div className='res_container' >
     
         {
          filteredres.map((resdeta)=>(<Link key={resdeta.info.id} to={"/resturent/"+resdeta.info.id} >
            {
              resdeta.info.sla.deliveryTime<25?<Resturentdelivery resdeta={resdeta} />:<Cards  resdeta={resdeta}/>
            
            }
             
          </Link>))

         }

         </div>
      </div>
    )
  }

  export default Body;