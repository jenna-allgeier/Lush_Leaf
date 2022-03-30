import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PlantDetails from './PlantDetails'

const AllPlants = () => {
    
    const [ plants, setPlants ] = useState([])

    const getAllPlants = async () => {
        const res = await axios.get('http://localhost:3001/plants')
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
            <div className="plants">
                {
                    plants.map((plant) => {
                        return (
                            <div key={plant._id} onClick={() => plantDetails(plant)}>
                                <p className="nickname">{plant.nickname}</p>
                                <p className="common-name">{plant.common_name}</p>
                                <img className="plant-image" src={plant.image} alt={plant.common_name} />
                            </div> 
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AllPlants