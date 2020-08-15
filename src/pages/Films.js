import React, {useState,useEffect} from 'react';
import axios from "axios"
import  CharecterGrid from "../componenets/CharecterGrid"
import ParticlesBg from 'particles-bg'
import "./films.css"

const Films = () => {
    
    
    const[items,setItems]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    
    
    useEffect(() => {
        
        const fetchItems = async() => {
        
        const result = await axios(`https://ghibliapi.herokuapp.com/films`)
        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
    
        }

        fetchItems()

    }, [])
    
    
    
    return (
        <div className="film" >
            <ParticlesBg type="lines" bg={true} />
            <CharecterGrid items={items} isLoading={isLoading} />
            
        </div>
    )
}

export default Films
