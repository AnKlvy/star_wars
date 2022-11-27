import { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

export const Content = ({handleCreateFan}) => {
    const [selector, setSelector] = useState("Characters");
    
    const handleSelectorChange = (event) => {
        setSelector(event.target.value);
    };
   

    

    return(
        <div className="content-layout">
            <select 
            value={selector}
            onChange={handleSelectorChange}
            placeholder="Choose your path"
            className="select-item">
                <option>Characters</option>
                <option>Planets</option>
                <option>Starships</option>

            </select>
        {selector ==="Characters" && swCharacters.map((character)=>(
           <ItemLists 
           key={character.name} 
           item={character}
           type = "characters">
            <ItemSpisok> Genger: {character.gender}</ItemSpisok>
            <ItemSpisok> Birthday: {character.birth_year}</ItemSpisok>
            </ItemLists>
          ))}
          {selector ==="Planets" && swPlanets.map((planet)=>(
            <ItemLists 
            key={planet.name} 
            item={planet}
            type = "planets">
                <ItemSpisok> Climate: {planet.climate}</ItemSpisok>
                <ItemSpisok> Terrain: {planet.terrain}</ItemSpisok>
              </ItemLists>          ))}
          {selector==="Starships" && swStarships.map((ship)=> (
             <ItemLists 
             key={ship.name} 
             item={ship}
             type = "ships">
              <ItemSpisok> Model: {ship.model}</ItemSpisok>
              <ItemSpisok> Manufacturer: {ship.manufacturer}</ItemSpisok>
               </ItemLists>
          ))}  
          
          </div>
        

    )
}