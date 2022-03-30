import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PlantComments from './PlantComments';
import AddPlant from './AddPlant';


const PlantDetails = () => {

    const [ selectedPlant, setPlant ] = useState({})

    const [ plants, setPlants ] = useState([])

    let { id } = useParams()

    const getAllPlants = async () => {
        const res = await axios.get('http://localhost:3001/plants')
        setPlants(res.data.plants)

        updateCurrentPlant(res.data.plants);
    }
    const updateCurrentPlant = (plants) => {
        let currentPlant = plants.find(
            (plant) => plant._id === id

        )
        setPlant(currentPlant)
    }
    
    useEffect(() => {
       getAllPlants();
       return () => {
           setPlant({})
       }
      }, [])  



    return (
        <div className="plant-details">
            <div className="plant-header">
                <h1 className="plant-nickname"> { selectedPlant.nickname} </h1>
            </div>
            <div className="corner"/>
            <div className="details">
                <img className="plant-image" src={selectedPlant.image} alt={selectedPlant.common_name} />
                <h4 className = "nickname">{selectedPlant.nickname}</h4>
                <div className = "add-details">
                    <h5 className = "plant-common-name">{selectedPlant.common_name}</h5>
                    <h5 className = "adoption-date">Adoption date:{selectedPlant.adoption_date}</h5>
                    <h5 className = "sun-needs">Sun needs:{selectedPlant.sun_needs}</h5>
                    <h5 className = "drinking-needs">Drinking needs:{selectedPlant.drinking_needs}</h5>
                </div> 
                <div>
                    <h5 className = "notes">Notes:{selectedPlant.notes}</h5>
                </div>       
                </div>
            <div className="plant-comments">
                    <h2>Write Comment</h2>
                    <div className="write-container">
                    <AddPlant id = {id} plants = {plants} selectedPlant = {selectedPlant}/>
                    </div>
                <div className="comments-container">
                    <h3>Previous Comments</h3>
                    <PlantComments id = {id} plants = {plants} selectedPlant = {selectedPlant}/>
                </div>  
            </div>
        </div>
    )

}

export default PlantDetails