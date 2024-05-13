// In component  function always first letter Capital
import './App.css';
import React , { useState } from 'react';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"


function App() {
 let [Counter , setCounter] =  useState(15) //counter -:variable , setCounter-; function
  // let counter = 15
  const addValue = () =>{
//  counter = counter + 1;
console.log('Clicked' , Counter)
setCounter(Counter + 1)
 console.log("Succesfully", Counter)
  }
  const remove = () => {
    setCounter(Counter-1)
    if(Counter < 1){
      console.log('not possible')
    }
    else{
       console.log('continue')
    }

  }
  return (
    <>
  
  
    <h1>Chai aur react</h1>
     <h2>Counter value: {Counter}</h2>
     <button onClick={addValue}>
    Add value{Counter}
     </button>
     <button onClick={remove}>remove value{Counter}</button>
     <About/>
    </>
  );
}

export default App;
