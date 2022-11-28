import swPlanets from "../../data/planets.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

import { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid'

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
<Grid container spacing={2} >
{planets.map((planet)=>(
      <Grid item xs={4} >
    <ItemLists 
    key={planet.name} 
    item={planet}
    type = "planets">
        <ItemSpisok> Climate: {planet.climate}</ItemSpisok>
        <ItemSpisok> Terrain: {planet.terrain}</ItemSpisok>
      </ItemLists>          
        </Grid>
        ))}
    
     
    </Grid>
</>
    )
}