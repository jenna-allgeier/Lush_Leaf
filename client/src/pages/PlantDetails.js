import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import AllPlants from '../components/AllPlants';
// import AddPlant from '../components/AddPlant';
import AllComments from '../components/AllComments';
import AddComment from '../components/AddComment';


const PlantDetails = () => {

    const [ selectedPlant, setPlant ] = useState({})
    const [ plants, setPlants ] = useState([])
    const [ comments, setComments ] = useState([])


    const [ comment, setComment ] = useState('');
    const [ commentSent, setCommentSent ] = useState('');


    let { id } = useParams()

    useEffect(() => {
        getAllPlants();
        return () => {
            setPlant({})
        }
       }, [])

    useEffect(() => {
    const fetchData = async ()=> {
    
    }
    fetchData()
    .catch(console.error);;
    }, [comments])  


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
                        <button className="btn" type="submit">Edit</button>
                    </div>
                    
                </div>       
                </div>
            <div className="plant-comments">
                    <h2>Write Comment</h2>
                    <div className="write-container">
                    <AddComment 
                    id = {id} plants = {plants} selectedPlant = {selectedPlant}
                    comment={comment} setComment={setComment} commentSent={commentSent} setCommentSent={setCommentSent}/>
                    </div>
                <div className="comments-container">
                    <h3>Previous Comments</h3>
                    <AllComments id = {id} plants = {plants} selectedPlant = {selectedPlant}
                    comments={comments} setComments={setComments} comment={comment} setComment={setComment}/>
                </div>  
            </div>
        </div>
    )

}

export default PlantDetails