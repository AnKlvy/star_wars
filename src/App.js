import { useState  } from "react";
import { DefaultContex, FanContext } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {Header} from "./components/header"
import {Content} from "./components/content"
import { Main } from "./main";


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
        <Route path="/characters" element={<Content/>} />
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
