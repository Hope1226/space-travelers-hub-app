import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './assets/stylesheets/App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
