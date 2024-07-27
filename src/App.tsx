import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './features/Auth/Auth';
import Spaces from './features/Spaces/Spaces';

function App() {
  return (
    <div className="App">
      <div className="Auth">
        <Auth />
      </div>
      <div>
        <Spaces />
      </div>
    </div>
  );
}

export default App;
