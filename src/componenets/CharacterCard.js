
import React from 'react'
import "./CharacterCard.css"



const CharacterCard = ({ item }) => {
  

  
  
  
  
  
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <ul  className="text" >
            <li  className="name">
              <strong style={{color:"Teal"}} > Name:</strong> {item.title}
            </li>
            <li className="director">
              <strong style={{color:"black"}}>Director:</strong> {item.director}
            </li>
            <li>
              <strong style={{color:"black"}} >Producer:</strong> {item.producer}
            </li>
            </ul>
        </div>
        <div className='card-back'>
          
          <ul>
            
            
          
            
            <li>
              <strong style={{color:"black"}} >Date:</strong> {item.release_date}
            </li>
            <li>
              <strong style={{color:"black"}} >Rotten Tomato Score:</strong> {item.rt_score}
            </li>
            <li>
              {item.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

/*
  
const projects = [
    {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      photo: background1
      
    },
    {
      id:2,
      photo:background2
      
    },
    
  ]
  
<li>
               <img  /> 
            </li>


{ projects.map( (e) =>( <img  src={e.photo} alt='fa' /> ) ) }*/