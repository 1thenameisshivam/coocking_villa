import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../assets/useResmenu"
import MenuAccordian from "./MenuAccordian";

const ResturentMenue = () => {
    const {resid} =useParams()

    const menueitem=useResmenu(resid);

    if(menueitem===null) return <Shimmer/>

    // console.log(menueitem?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const catogary=menueitem?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

     

  return (
    <div className="menue text-center">

    <h1 className=" text-lg font-bold " >{menueitem.data.cards[0].card.card.info.name}</h1>
    <div className="flex justify-center gap-4 text-lg font-semibold ">

    <h3>{menueitem.data.cards[0].card.card.info.costForTwoMessage}</h3>
    <h3>{menueitem.data.cards[0].card.card.info.slugs.restaurant}</h3>

    </div>
  
     <ul className="items">
     <h3  className="font-extrabold ">Menue Items</h3>
     {
      catogary.map(c=><MenuAccordian key={c.card.card.id} menusec={c.card.card}/>)
     }
      
     
     </ul>
    </div>
  )
}

export default ResturentMenue