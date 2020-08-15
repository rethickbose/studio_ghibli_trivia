import React from 'react'
import "./PeopleCard.css"

const PeopleCard = ({people}) => {
    return (
        <div >
           <div className='peoples'>
               
                <div className='peoples-inner'>
                     <div className='peoples-front'>
                            <ul  className="text" >
                                     <li  className="name">
                                         <strong style={{color:"Teal"}} > Name:</strong> {people.name}
                                     </li>
                                     <li className="director">
                                            <strong style={{color:"black"}}>Gender:</strong> {people.gender}
                                    </li>
                                     <li>
                                             <strong style={{color:"black"}} >Age:</strong> {people.age}
                                    </li>
                             </ul>
                     </div>
                     <div className='peoples-back'>
          
                             <ul>
                                <li>
                                    <strong style={{color:"black"}} >Eye Color:</strong> {people.eye_color}
                                </li>
                                <li>
                                     <strong style={{color:"black"}} >Hair Color:</strong> {people.hair_color}
                                </li>
                                <li>
                                     <strong style={{color:"black"}} >Movies Appeared In:</strong> 
                                     {people.films}
                                </li>
                                <li>
                                    <strong style={{color:"black"}} >Speciesr:</strong> 
                                    {people.species}
                                </li>
                                <li>
                                    <strong style={{color:"black"}} >url:</strong> 
                                    {people.url}
                                </li>
                            </ul>
                     </div>
                </div>
            </div>
  


        </div>
    )
}

export default PeopleCard
