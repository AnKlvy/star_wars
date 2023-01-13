import { useEffect, useState  } from "react";
import { AboutCon, AboutHandle, Add, DefaultContex, FanContext, KeyCon } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {Header} from "./components/header"
import {Characters} from "./components/characters"
import { Main } from "./main";
import { Planets } from "./components/planets";
import { Starships } from "./components/starships";
import axios from "axios";
import { Star } from "@mui/icons-material";
import { About } from "./components/about";


function App() {
  const [text, setText] = useState("");
  const handleAbout = (event)=>{
    setText(event.target.value);
  }

  const [fan,setFan] = useState("")
  const handleCreateFan = ({name})=>{
    setFan(name);
}

const [about, setAbout] =useState([]);

const handleAddAbout=()=> {
  if(text){
    // const newObj = {text};

  setAbout([text, ...about]);
 
}
};

const handleKeyPress = (e) => {
  if(e.key === "Enter"){
    handleAddAbout()
  }
}




  return (
    <DefaultContex.Provider value={{handleCreateFan}}>
      <FanContext.Provider value={{fan}}>
      <AboutCon.Provider value={{about}}>
      <AboutHandle.Provider value={{handleAbout}}>
        <Add.Provider value={{handleAddAbout}}>
          <KeyCon.Provider value={{handleKeyPress}}>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} >
        <Route path="/characters" element={<Characters/>} />
        <Route path="/planets" element={<Planets/>} />
        <Route path="/starships" element={<Starships/>} />
        <Route path="/about" element={<About/>} />
        </Route>
        {/* <Route path="/" element={<MainPage/>} />
        <Route path="/" element={<MainPage/>} /> */}
      
    
    {/* <hr/> */}
    
    
      </Routes>
    </Router>
    </KeyCon.Provider>
    </Add.Provider>
    </AboutHandle.Provider>
</AboutCon.Provider>
    </FanContext.Provider>
    </DefaultContex.Provider>
  );
}

export default App;
