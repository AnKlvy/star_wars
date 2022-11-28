import swPlanets from "../../data/planets.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

import { useState, useEffect } from "react";
import axios from "axios";

export const Planets = ({}) => {
  const [planets,setPlanets]=useState([]);

    useEffect(()=> {
        getAllItems();
      },[]);
      
      const getAllItems=()=>{
        axios
          .get(
           `https://swapi.py4e.com/api/planets/`)
           .then((res)=>res.data)
           .then((res)=>{
            console.log(res)
            setPlanets(res.results)
               });      
      }

    return(
<>
{planets.map((planet)=>(
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