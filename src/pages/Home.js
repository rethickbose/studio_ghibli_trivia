import React from 'react'
import "./Home.css"
import ParticlesBg from 'particles-bg'
import TextLoop from "react-text-loop";







const Home = () => {

 
    return (
        <div   className="container">
            
            <ParticlesBg type="lines" bg={true} />

                <div className="text">
                          
                    <section className="title">
                        <h1  >
                       <div className="ghibli" >Welcome to the World of </div> <br/>
                        <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                            <span>STUDIO GHIBLI</span>
                            <span>S</span>
                            <span>ST</span>
                            <span>STU</span>

                            
                            <span>STUD</span>
                            <span>STUDI</span>

                            <span>STUDIO </span>
                            <span>STUDIO G</span>
                            <span>STUDIO GH</span>

                            <span>STUDIO GHI</span>
                            <span>STUDIO GHIB</span>
                            <span>STUDIO GHIBL</span>
                            <span>STUDIO GHIBLI</span>
                        </TextLoop>{" "}
                        
                        </h1>
                     </section>
                       
                    <section className="other">
                        <h1>
                        <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                            <span>The Ultimate Trivia Website </span>
                            <span>Find Details About Hayao Miyazaki's Creations</span>
                            
                        </TextLoop>{" "}
                        in every category.
                        <section className="other2">
                        
                        <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                            <span>Find Out About All The Movies </span>
                            <span>Characters</span>
                           
                        </TextLoop>{"  "}
                        In This Universe
                       
                        </section> 
                        </h1>
                        
                       

                    </section>   
                    

                </div>

        </div>
        
    )
}

export default Home
