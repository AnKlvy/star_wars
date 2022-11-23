export const ItemLists = ({item, handleCreateFan, children, type})=>{
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
          <button className="favorite-button"
          onClick={()=>handleCreateFan(item)}
          >I am your fan!!!!!</button> 
            )}
          <img 
            className="item-image"
            src={item.url}
            alt=""
            />
          </div>
        </div> 
    )
}