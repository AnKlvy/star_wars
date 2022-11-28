import { useState  } from "react";
import { DefaultContex, FanContext } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {Header} from "./components/header"
import {Characters} from "./components/characters"
import { Main } from "./main";
import { Planets } from "./components/planets";
import { Starships } from "./components/starships";


function App() {
  const [fan,setFan] = useState("")
  const handleCreateFan = ({name})=>{
    setFan(name);
}



  return (
    <DefaultContex.Provider value={{handleCreateFan}}>
      <FanContext.Provider value={{fan}}>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} >
        <Route path="/characters" element={<Characters/>} />
        <Route path="/planets" element={<Planets/>} />
        <Route path="/starships" element={<Starships/>} />
        </Route>
        {/* <Route path="/" element={<MainPage/>} />
        <Route path="/" element={<MainPage/>} /> */}
      
    
    {/* <hr/> */}
    
    
      </Routes>
    </Router>
    </FanContext.Provider>
    </DefaultContex.Provider>
  );
}

export default App;
