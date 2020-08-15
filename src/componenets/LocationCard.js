import React from 'react'
import "./LocationCard.css"

const LocationCard = ({location}) => {
    return (
        <div >
           <div className='location'>
               
                <div className='location-inner'>
                     <div className='location-front'>
                            <ul  className="text" >
                                     <li  className="name">
                                         <strong style={{color:"Teal"}} > Name:</strong> {location.name}
                                     </li>
                                     <li className="director">
                                            <strong style={{color:"black"}}>Climate:</strong> {location.climate}
                                    </li>
                                     <li>
                                             <strong style={{color:"black"}} >Terrain:</strong> {location.terrain}
                                    </li>
                             </ul>
                     </div>
                     <div className='location-back'>
          
                             <ul>
                                <li>
                                    <strong style={{color:"black"}} >Surface Water:</strong> {location.surface_water}
                                </li>
                                <li>
                                     <strong style={{color:"black"}} >Residents:</strong> {location.residents}
                                </li>
                                <li>
                                     <strong style={{color:"black"}} >Movies Appeared In:</strong> 
                                     {location.films}
                                </li>
                                <li>
                                    <strong style={{color:"black"}} >Species:</strong> 
                                    {location.url}
                                </li>
                                
                            </ul>
                     </div>
                </div>
            </div>
  


        </div>
    )
}

export default LocationCard
