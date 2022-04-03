import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AllPlants = () => {
    
    const [ plants, setPlants ] = useState([])

    const getAllPlants = async () => {
        const res = await axios.get('/plants')
        console.log(res.data.plants)
        setPlants(res.data.plants)
    }
    useEffect(() => {
       getAllPlants();
      }, [])  
    
    let navigate = useNavigate();
    const plantDetails = (plant) => {
      navigate(`${plant._id}`)   
    }

    return (
            <div className="plants-page">
                {
                    plants.map((plant) => {
                        return (
                            <div className="plant" key={plant._id} onClick={() => plantDetails(plant)}>
                                <h2 className="nickname">{plant.nickname}</h2>
                                <h4 className="common-name">{plant.common_name}</h4>
                                <img className="plant-image" src={plant.image} alt={plant.common_name} />
                            </div> 
                        )
                    })
                }

            </div>
    )
}

export default AllPlants