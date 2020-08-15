import React,{useEffect,useState} from 'react'
import axios from "axios"
import SpecieCard from "../componenets/SpecieCard"
import VehicleCard from "../componenets/VehicleCard"
import "./Species.css"
import TextLoop from "react-text-loop";

const Species = () => {
   
    const [species,setSpecies]=useState([])
    const [vehicles,setVehicles]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    

    useEffect(() => {
        
        const fetchspecies=async()=>{
            const result= await axios(`https://ghibliapi.herokuapp.com/species`)
            console.log(result.data)
            setSpecies(result.data)
            setIsLoading(false)
        }
        const fetchvehicles=async()=>{
            const resul= await axios(`https://ghibliapi.herokuapp.com/vehicles`)
            console.log(resul.data)
            setVehicles(resul.data)
            setIsLoading(false)
        }
        fetchspecies()
        fetchvehicles()
    }, [])
    
    
  
   
   
   
   
   
   
    return (
        <div  className="speci">
            <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                            <h1 className="species-title">Specie's in Studio Ghibli Universe</h1>
                             <h1 className="species-title">Specie's in Studio Ghibli Universe</h1>
                            <h1 className="species-title">Specie's in Studio Ghibli Universe</h1>
                           
                        </TextLoop>{"  "}
           
            <div  className="species">
                
                { isLoading?(<h1>Loading...</h1>) : (species.map(
                    (specie)=>(<SpecieCard specie={specie} ></SpecieCard>
                        ) 
                    ) )}
            </div>
            <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                           <h1 className="vehicle-title">Vehicle's in Studio Ghibli Universe </h1>
                           <h1 className="vehicle-title">Vehicle's in Studio Ghibli Universe </h1>
                           <h1 className="vehicle-title">Vehicle's in Studio Ghibli Universe </h1>
                           
                        </TextLoop>{"  "}
           
            <div  className="vehicles">
                
                { isLoading?(<h1>Loading...</h1>) : (vehicles.map(
                    (vehicle)=>(<VehicleCard  vehicle={vehicle} ></VehicleCard>
                        ) 
                    ) )}
            </div>
        </div>
    )
   
}

export default Species
