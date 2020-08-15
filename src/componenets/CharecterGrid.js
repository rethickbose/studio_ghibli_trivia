import React from 'react'
import CharacterCard from "./CharacterCard"


const CharecterGrid = ({items,isLoading}) => {
    return (
       
        isLoading 
        ? 
            <h1>Loading...</h1> 
        : 
            <section className="cards" >
                    {items.map( (item) =>(
                        
                            <CharacterCard key={item.key} item={item} > 
                            
                            </CharacterCard>
                   
                    

                    ) )}

            </section>
                    
            
    )
}

export default CharecterGrid


/*  <p key={item.id}  >{item.title} </p>*/