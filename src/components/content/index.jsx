import { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

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
            <div 
            key={character.name}
            className="item-list-layout">
              <div>
                <p> Name: {character.name}</p>
                <p> Genger: {character.gender}</p>
                <p> Birthday: {character.birth_year}</p>
              </div>
              <div className="item-image-layout">
              <button className="favorite-button"
              onClick={()=>handleCreateFan(character)}
              >I am your fan!!!!!</button> 
              <img 
                className="item-image"
                src={character.url}
                alt=""
                />
              </div>
            </div> 
          ))}
          {selector ==="Planets" && swPlanets.map((planet)=>(
            <div 
            key={planet.name}
            className="item-list-layout">
              <div>
                <p> Name: {planet.name}</p>
                <p> Climate: {planet.climate}</p>
                <p> Terrain: {planet.terrain}</p>
              </div>
              <div className="item-image-layout">
        
              <img 
                className="item-image"
                src={planet.url}
                alt=""
                />
              </div>
            </div> 
          ))}
          {selector==="Starships" && swStarships.map((ship)=> (
            <div 
            key={ship.name}
            className="item-list-layout">
              <div>
                <p> Name: {ship.name}</p>
                <p> Model: {ship.model}</p>
                <p> Manufacturer: {ship.manufacturer}</p>
              </div>
              <div className="item-image-layout">
              
              <img 
                className="item-image"
                src={ship.url}
                alt=""
                />
              </div>
                </div> 
          ))}
          
          </div>
        

    )
}