import { useState, useEffect } from "react";
import axios from "axios";


// import swCharacters from "../../data/characters.json";
// import swPlanets from "../../data/planets.json";
// import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";
import Grid from '@mui/material/Grid'


export const Characters = () => {
    // const [selector, setSelector] = useState("Characters");
    
    // const handleSelectorChange = (event) => {
    //     setSelector(event.target.value);
    // };

    const [characters, setCharacters]= useState([])

    useEffect(()=> {
        getAllItems();
      },[]);
      
      const getAllItems=()=>{
        axios
          .get(
           `https://swapi.py4e.com/api/people/`)
           .then((res)=>res.data)
           .then((res)=>{
            console.log(res)
            setCharacters(res.results)
               });      
      }

    

    return(
        <>
        <Grid container spacing={2}>
    
        
        {characters.map((character)=>(
            <Grid item xs={4}>
           <ItemLists 
           key={character.name} 
           item={character}
           type = "characters">
            <p> Genger: {character.gender}</p>
            <p> Birthday: {character.birth_year}</p>
            </ItemLists>
            </Grid>
          ))}
      
       
      </Grid>
            {/* <select 
            value={selector}
            onChange={handleSelectorChange}
            placeholder="Choose your path"
            className="select-item">
                <option>Characters</option>
                <option>Planets</option>
                <option>Starships</option>

            </select> */}
       
    </>
    )
}