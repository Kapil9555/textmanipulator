import './App.css';
import Navbar from './components/Navbar'; 
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About'; 
import TextForm from './components/TextForm'

import {
  BrowserRouter as Router,
 
  
} from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={'This is alert'}/>
    <div className="container my-3">
    
            <About />
          
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
          
     
    </div>
    </Router>
    </> 
  );
}

export default App;