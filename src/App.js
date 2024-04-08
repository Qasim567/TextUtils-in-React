import './App.css';
import React ,{useState} from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light')
  const [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    }, 2000)
  }
  const toggleMode=()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showalert('Dark Mode has been enabled','success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert('Light Mode has been enabled','success')
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showalert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
      </Routes>
      </div> 
      </BrowserRouter>    
    </>
  );
}

export default App;
