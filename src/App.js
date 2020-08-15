import React from 'react';
import Background from "./images/background1.jpg"
import Navbar from "./componenets/Navbar"
import {BrowserRouter as Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Films from "./pages/Films"
import People from "./pages/People"
import Location from "./pages/Location"
import Species from "./pages/Species"





import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Navbar/>

        <Route path="/" exact>  <Home/> </Route>
        <Route path="/films" exact> <Films/> </Route>
        <Route path="/characters" exact> <People /> </Route>
        <Route path="/location" exact  >  < Location/> </Route>
        <Route path="/species" exact > < Species/>   </Route>
        
       



      </Switch>
        
      
    </div>
  );
}

export default App;


//style={{ backgroundImage: `url(${Background})`}}