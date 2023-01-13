import { createContext, useContext } from "react"
import { AboutCon, AboutHandle, Add, KeyCon } from "../../Context";

export const About = ()=>{
    const {about} = useContext(AboutCon);
    const {handleAbout}= useContext(AboutHandle)
    const {handleAddItem}=useContext(Add)
    const {handleKeyPress}=useContext(KeyCon)
    return (
        <>
        <p>В 18 веке солдаты, воевавшие против армий Фридриха, принесли тараканов в Москву и в Петербург. До этого тараканов не было.</p>
        <p>Вам полезна эта информация?</p>
        <input
        value={about}
        
        onChange={handleAbout}
        // onSubmit={handleSubmit}
        type="text"
        className="form-control"
        onKeyDown={handleKeyPress}
      />
      <button className="btn btn-outline-secondary" 
      onClick={handleAddItem}
     >
        Add item
      </button>
      </>
    )
}