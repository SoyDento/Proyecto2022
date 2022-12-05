import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <BrowserRouter> 
      <Route exact path={'/home'} component={Home}/>
    </BrowserRouter>
  );
}

export default App;
