import { useState  } from "react";
import { DefaultContex } from "./Context";

import {Header} from "./components/header"
import {Content} from "./components/content"


function App() {
  const [fan,setFan] = useState("")
  const handleCreateFan = ({name})=>{
    setFan(name);
}



  return (
    <DefaultContex.Provider value={{handleCreateFan}}>
    <Header fan={fan}/>
    <hr/>
    <Content/>
    </DefaultContex.Provider>
  );
}

export default App;
