import { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

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
           handleCreateFan={handleCreateFan}
           type = "characters">
            <p> Genger: {character.gender}</p>
            <p> Birthday: {character.birth_year}</p>
            </ItemLists>
          ))}
          {selector ==="Planets" && swPlanets.map((planet)=>(
            <ItemLists 
            key={planet.name} 
            item={planet}
            handleCreateFan={handleCreateFan}
            type = "planets">
                <p> Climate: {planet.climate}</p>
                <p> Terrain: {planet.terrain}</p>
              </ItemLists>          ))}
          {selector==="Starships" && swStarships.map((ship)=> (
             <ItemLists 
             key={ship.name} 
             item={ship}
             handleCreateFan={handleCreateFan}
             type = "ships">
              <p> Model: {ship.model}</p>
              <p> Manufacturer: {ship.manufacturer}</p>
               </ItemLists>
          ))}  
          
          </div>
        

    )
}