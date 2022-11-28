import swPlanets from "../../data/planets.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

export const Planets = ({}) => {
  
    

    return(
<>
{swPlanets.map((planet)=>(
    <ItemLists 
    key={planet.name} 
    item={planet}
    type = "planets">
        <ItemSpisok> Climate: {planet.climate}</ItemSpisok>
        <ItemSpisok> Terrain: {planet.terrain}</ItemSpisok>
      </ItemLists>          ))}
</>
    )
}