import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

export const Starships = ({}) => {

return(
    <>
{swStarships.map((ship)=> (
    <ItemLists 
    key={ship.name} 
    item={ship}
    type = "ships">
     <ItemSpisok> Model: {ship.model}</ItemSpisok>
     <ItemSpisok> Manufacturer: {ship.manufacturer}</ItemSpisok>
      </ItemLists>
 ))}
 </> 
 )

}