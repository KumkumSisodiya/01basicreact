 import React, { useState } from 'react';
import './App.css';
import './index.js'
import UserContextProvider from './context/UserContextProvider';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  // const [color, setColor] = useState('');

  return (
   import { useEffect, useState } from "react";
import "./App.css";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { ThemeProvider } from './context/theme';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Apply theme changes to HTML element
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

    <>
      {/* color changes
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              onClick={() => setColor('red')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>
            <button
              onClick={() => setColor('green')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            <button
              onClick={() => setColor('orange')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: 'orange' }}
            >
              Orange
            </button>
          </div>
        </div>
      </div> */}

      {/* 
      <div className='w-full h-screen duration-2'>
      <div className='min-h-screen bg-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-center text-black'>Password generator</h1>
        <div className='container'>
          <Password/>
          <CurrencyConverter/>
        </div>
      </div>
      <h2 className="text-center">Chai or code</h2>
      <br/>
      <h2 className="text-center">Counter value</h2>
      <button onClick={addValue} className="block mx-auto mt-2">Add value {counter}</button>
      <br/>
      <button className="block mx-auto">Remove value {counter}</button>
      <p>footer: {counter}</p> 
      */}
      {/* <Header/>
      <Footer/>
      <Home/> */}

      <UserContextProvider>
                <Login/>
        <Profile/>

        
      </UserContextProvider>
    </>
  );
}

export default App;
