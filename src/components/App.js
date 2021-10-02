import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
// import TextForm from "./TextForm";
import '../App.css'
import Alert from "./Alert";
import About from "./About";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#000000';
      document.body.style.color='white';
      showAlert("Dark Mode Enabled","success");
      document.title='TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Dark Mode Disabled","success");
      document.title='TextUtils - Light Mode';
    }

  }



  return (
    <>
      <Navbar id="navbar" title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <div className="container py-3" id="textform" >
          <TextForm header="Enter your text here"  mode={mode} showAlert={showAlert}/>
      </div> */}
      <div className="container">
        <About mode={mode}/>
      </div>

    </>
  );
}

export default App;
