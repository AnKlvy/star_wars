import { Button } from "@mui/material"
import { useContext } from "react"
import { DefaultContex } from "../../Context"

export const ItemLists = ({item, children, type})=>{
  const {handleCreateFan}= useContext(DefaultContex)
    return (
        <div 
        key={item.name}
        className="item-list-layout">
          <div>
            <p> Name: {item.name}</p>
            {children}
          </div>
          <div className="item-image-layout">
            {type==="characters" && (
              
          <Button style={{background:'black'}} className="favorite-button"
          onClick={()=>handleCreateFan(item)}
          >I am your fan!!!!!</Button> 
            )}
          <img 
            className="item-image"
            src={item.img}
            alt=""
            />
          </div>
        </div> 
    )
}