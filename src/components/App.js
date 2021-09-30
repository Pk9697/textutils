import Navbar from "./Navbar";
import TextForm from "./TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils2"/>
      <div className="container my-3">
          <TextForm header="Enter your text here"/>
      </div>
      
    </>
  );
}

export default App;
