import { useState , useEffect } from "react";
import { CDN_MENU } from "./constants";

function useResmenu(resid){

    const [menueitem,setMenueitem]=useState(null);

    useEffect(()=>{
        ResturentMenue();
    },[])


    const ResturentMenue= async ()=>{
        const menudata= await fetch(CDN_MENU+resid);

        const jsonmenudata= await menudata.json();
        setMenueitem(jsonmenudata)
        // console.log(menueitem.data)
    }

    return menueitem;
}

export default useResmenu;