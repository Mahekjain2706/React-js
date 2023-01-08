
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// different color palid dark mode , not count empty string

// Routers Dom 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
       setAlert({
         msg : message,
         type : type
       })
       setTimeout(() =>{
        setAlert(null);
       },2000);
  }
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Enable Dark Mode","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enable Light Mode","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter The text to analyze below " mode={mode} toggleMode={toggleMode} showAlert={showAlert} /> 
        {/* <About/> */}
      </div>
      
    </>
  ); 
}

export default App;
