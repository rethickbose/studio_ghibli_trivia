import React,{useEffect,useState} from 'react'
import "./people.css"
import axios from 'axios'
import PeopleCard from "../componenets/PeopleCard"
import TextLoop from "react-text-loop";


const People = () => {
    const [peoples,setPeoples]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    

    useEffect(() => {
        
        const fetchpeople=async()=>{
            const result= await axios(`https://ghibliapi.herokuapp.com/people`)
            console.log(result.data)
            setPeoples(result.data)
            setIsLoading(false)
        }
        fetchpeople()
    }, [])
    
    
    return (
        <div  className="chara">
                    <TextLoop
                            springConfig={{ stiffness: 70, damping: 31 }}
                            adjustingSpeed={500}
                        >
                           <h1 className="people-title">Characters in the Studio Ghibli Universe</h1>
                           <h1 className="people-title">Characters in the Studio Ghibli Universe</h1>
                           <h1 className="people-title">Characters in the Studio Ghibli Universe</h1>
                           
                        </TextLoop>{"  "}
                        
                       
            
            <div  className="people">
                
                { isLoading?(<h1>Loading...</h1>) : (peoples.map(
                    (people)=>(<PeopleCard key={people.id} people={people}  />
                        ) 
                    ) )}
            </div>
        </div>
    )
}

export default People
