import React,{useEffect,useState} from 'react'
import axios from "axios"
import LocationCard from "../componenets/LocationCard"
import "./Location.css"
import TextLoop from "react-text-loop";



const Location = () => {
   
    const [locations,setLocations]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    

    useEffect(() => {
        
        const fetchlocation=async()=>{
            const result= await axios(`https://ghibliapi.herokuapp.com/locations`)
            console.log(result.data)
            setLocations(result.data)
            setIsLoading(false)
        }
        fetchlocation()
    }, [])
    
    
  
   
   
   
   
   
   
    return (
        <div  className="locat">
                     <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                            <h1 className="locations-title">Location's in Studio Ghibli Universe</h1>
                            <h1 className="locations-title">Location's in Studio Ghibli Universe</h1>
                            <h1 className="locations-title">Location's in Studio Ghibli Universe</h1>
                           
                        </TextLoop>{"  "}
                        
           
            <div  className="locations">
                
                { isLoading?(<h1>Loading...</h1>) : (locations.map(
                    (location)=>(< LocationCard location={location} /> 
                        ) 
                    ) )}
            </div>
        </div>
    )
   
}

export default Location
