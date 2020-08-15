import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import logo from "../images/logo.jpg"


const Navbar = () => {
    return (
        <div className="navbar">
            
            <img
            className="logo"
            src={logo}
            alt="logo"
            />
            
            <div className="links">
                <div className="home">  
                    <Link to="/" style={{color:"White"}} >Home</Link>
                </div> 
                
                <div className="fims">  

                    <Link to="/films" style={{color:"White"}}>Movies</Link>
                </div> 
                <div className="Characters">  
                    <Link to="/characters" style={{color:"White"}} >Characters</Link>
                </div> 
                
                <div className="locatio">  
                    <Link to="/location" style={{color:"White"}} >Location</Link>
                </div> 

                <div className="species">  
                    <Link to="/species" style={{color:"White"}} >Species</Link>
                </div> 


                </div>
        
        
        
        </div>


)
}

export default Navbar
