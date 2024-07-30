import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <h1 className="App">
          <Navbar></Navbar>
          <NavLink></NavLink>
    </h1>
  );
}

export default App
