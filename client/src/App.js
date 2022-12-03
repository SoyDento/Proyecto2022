import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import PlayerDetail from './components/PlayerDetail';
import './App.css';


function App() {
  return (
    <BrowserRouter> 
      <Route path = "/home" element= {NavBar}/>       
      <Route exact path = "/home/Sections" element= {Home}/>
      <Route path = "/home/players/:id" element= {PlayerDetail}/> 
    </BrowserRouter>
  );
}

export default App;
