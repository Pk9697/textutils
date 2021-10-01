import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import '../App.css'
function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#000000';
      document.body.style.color='white';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }

  }

  return (
    <>
      <Navbar id="navbar" title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
      <div className="container py-3" id="textform" >
          <TextForm header="Enter your text here"  mode={mode}/>
      </div>
    </>
  );
}

export default App;
