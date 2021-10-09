import { useState } from "react/cjs/react.development";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import '../App.css'
import Alert from "./Alert";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }
  
  const toggleMode=()=>{
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
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
    <Router>
    <Navbar id="navbar" title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <div className="container">
              <About mode={mode}/>
            </div>
          </Route>
          <Route exact path="/">
            <div className="container py-3" id="textform" >
              <TextForm header="Enter your text here"  mode={mode} showAlert={showAlert}/>
            </div>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
