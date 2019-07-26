import React from 'react';
import RestCall from './components/RestCall';
import Auth from './components/Auth';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <RestCall></RestCall>
        <Auth></Auth>
      </header>
    </div>
  );
}

export default App;
