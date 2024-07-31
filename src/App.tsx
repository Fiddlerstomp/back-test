import { useState } from 'react';
import './App.css';
import Auth from './features/Auth/Auth';
import Spaces from './features/Spaces/Spaces';

export let token: string = "";

function App() {
  const setTokenHandler = (newToken: string) => {
    token = newToken;
  }
  return (
    <div className="App">
      <div className="Auth">
        <Auth setToken={setTokenHandler} />
      </div>
      <div>
        <Spaces />
      </div>
    </div>
  );
}

export default App;
