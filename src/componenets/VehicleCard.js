import React from 'react'
import "./VehicleCard.css"


const VehicleCard = ({vehicle}) => {
    return (
        
            <div >
               <div className='vehicle'>
                   
                    <div className='vehicle-inner'>
                         <div className='vehicle-front'>
                                <ul  className="text" >
                                         <li  className="name">
                                             <strong style={{color:"Teal"}} > Name:</strong> {vehicle.name}
                                         </li>
                                         <li className="director">
                                                <strong style={{color:"black"}}>Vehicle Class:</strong> {vehicle.vehicle_class}
                                        </li>
                                         <li>
                                                 <strong style={{color:"black"}} >Length:</strong> {vehicle.length}
                                        </li>
                                 </ul>
                         </div>
                         <div className='vehicle-back'>
              
                                 <ul>
                                    <li>
                                        <strong style={{color:"black"}} >description:</strong> {vehicle.description}
                                    </li>
                                    <li>
                                         <strong style={{color:"black"}} >pilot:</strong> {vehicle.pilot}
                                    </li>
                                    
     
                                    
                                </ul>
                         </div>
                    </div>
                </div>
      
    
    
            </div>
        
    )
}

export default VehicleCard
