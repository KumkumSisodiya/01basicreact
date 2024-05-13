import React from 'react'; // core foundation library
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//react ourself dom make
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

