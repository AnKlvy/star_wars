import { useState } from "react";

import {Header} from "./components/header"
import {Content} from "./components/content"


function App() {
  const [fan,setFan] = useState("")
  const handleCreateFan = ({name})=>{
    setFan(name);
}



  return (
    <>
    <Header fan={fan}/>
    <hr/>
    <Content handleCreateFan={handleCreateFan}/>
    </>
  );
}

export default App;
