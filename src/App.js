import React from 'react';
import header from './assets/header1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <img src={header} class="App-image"alt="header" />
      </div>
      <div className="App-header">       
        <div class="App-items">
          RESNET
        </div>
        <div class="App-items">
          MobileNet
        </div>
        <div class="App-items">
          Face Detection
        </div>        
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
