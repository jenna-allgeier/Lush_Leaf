import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import PlantComments from './PlantComments';
import AddComment from './AddComment';


const PlantDetails = (props) => {

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
    
    let navigate = useNavigate();
    const linkToUpdatePlant = ({ id }) => {
        navigate(`/update-plant/${ id }`)
    }

    return (
        <div className="plant-details">
            <div className="plant-header">
                <h1 className="plant-nickname"> {selectedPlant.nickname} </h1>
            </div>
            <div className="corner"/>
            <div className="details">
                <img className="plant-image" src={selectedPlant.image} alt={selectedPlant.common_name} />
                    <h3 className = "plant-common-name">{selectedPlant.common_name}</h3>
                <div className = "add-details">
                    <h4 className = "adoption-date">Adoption date: {selectedPlant.adoption_date}</h4>
                    <h4 className = "sun-needs">Sun needs: {selectedPlant.sun_needs}</h4>
                    <h4 className = "drinking-needs">Drinking needs: {selectedPlant.drinking_needs}</h4>
                </div> 
                <div>
                    <h4 className = "notes">Notes: {selectedPlant.notes}</h4>
                </div>
                <div>
                    <div key={ id } onClick={() => linkToUpdatePlant({ id })}>
                        <button className="update-plant-btn" type="submit">Edit</button>
                        <Link to="/all-plants">
                            <button className="update-plant-btn">Delete</button>
                        </Link>
                    </div>
                    
                </div>       
                </div>
            {/* <div className="plant-comments">
                    <h2>Write Comment</h2>
                    <div className="write-container">
                    <AddComment id = {id} plants = {plants} selectedPlant = {selectedPlant}/>
                    </div>
                <div className="comments-container">
                    <h3>Previous Comments</h3>
                    <PlantComments id = {id} plants = {plants} selectedPlant = {selectedPlant}/>
                </div>  
            </div> */}
        </div>
    )

}

export default PlantDetails