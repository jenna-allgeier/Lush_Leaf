import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import AllPlants from '../components/AllPlants';
// import AddPlant from '../components/AddPlant';
import AddComment from '../components/AddComment';


const PlantDetails = () => {

    const [ selectedPlant, setPlant ] = useState({})
    // const [ plants, setPlants ] = useState([])
    const [ comment, setComment ] = useState('');
    const [ comments, setComments ] = useState([])
    const [ commentSent, setCommentSent ] = useState('');

    let { id } = useParams()

    useEffect(() => {

        getPlant();
        getComments();
        return () => {
            setPlant(selectedPlant);
            
        }
       }, []) 

    useEffect(() => {
        getComments();
       }, [commentSent]) 

    const handleCommentChange = (comment) => {
        setComment(comment)
    }

       
    const getPlant = async () => {
        const res = await axios.get(`/plants/${id}`)
        console.log("plant data: ", res.data.plant)
        setPlant(res.data.plant)
    }

    const getComments = async () => {
        const res = await axios.get(`/plants/${id}`)
        console.log(res.data.plant.comments)
        setComments(res.data.plant.comments)
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
                    id = {id} selectedPlant = {selectedPlant}
                    comment={comment} setComment={handleCommentChange} commentSent={commentSent} setCommentSent={setCommentSent}/>
                    </div>
                <div className="comments-container">
                    <h3>Previous Comments</h3>
                    {comments.map((comment) => {
                        return (
                            <div className="comment" key={comment._id}>
                                <p className="comment-text">{comment.text}</p>
                            </div> 
                            )
                        })}
                </div>  
            </div>
        </div>
    )

}

export default PlantDetails