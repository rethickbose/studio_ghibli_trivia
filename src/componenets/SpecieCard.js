import React from 'react'
import "./SpecieCard.css"

const SpecieCard = ({specie}) => {
    return (
        <div >
           <div className='specie'>
               
                <div className='specie-inner'>
                     <div className='specie-front'>
                            <ul  className="text" >
                                     <li  className="name">
                                         <strong style={{color:"Teal"}} > Name:</strong> {specie.name}
                                     </li>
                                     <li className="director">
                                            <strong style={{color:"black"}}>classification:</strong> {specie.classification}
                                    </li>
                                     <li>
                                             <strong style={{color:"black"}} >Eye Colors:</strong> {specie.eye_colors}
                                    </li>
                             </ul>
                     </div>
                     <div className='specie-back'>
          
                             <ul>
                                <li>
                                    <strong style={{color:"black"}} >Hair Colors:</strong> {specie.hair_colors}
                                </li>
                                <li>
                                     <strong style={{color:"black"}} >URL:</strong> {specie.url}
                                </li>
                                
 
                                
                            </ul>
                     </div>
                </div>
            </div>
  


        </div>
    )
}

export default SpecieCard
