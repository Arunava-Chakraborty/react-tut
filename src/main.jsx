import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Food from './components-Anson/basic_jsx/userFoood';
import ArrayRendering from './components-Anson/rendering/ArrayRendering';


ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <App/>
    <Food />
    <ArrayRendering />
  </React.StrictMode>
)
