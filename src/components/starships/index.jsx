// import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

import { useState, useEffect } from "react";
import axios from "axios";

export const Starships = ({}) => {

    const [starships,setStarships]=useState([]);

    useEffect(()=> {
        getAllItems();
      },[]);
      
      const getAllItems=()=>{
        axios
          .get(
           `https://swapi.py4e.com/api/starships/`)
           .then((res)=>res.data)
           .then((res)=>{
            console.log(res)
            setStarships(res.results)
               });      
      }

return(
    <>
{starships.map((ship)=> (
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