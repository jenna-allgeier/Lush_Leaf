import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateComment = () => {

    const [ selectedComment, setComment ] = useState({})

    let { id } = useParams()

    const getCommentById = async () => {
        const res = await axios.get(`/comments/${id}`)
        setComment(res.data.comment)
    }

    useEffect(() => {
       getCommentById();
       return () => {
           setComment({})
       }
      }, [])

    const [ text, setText ] = useState('');
    const [ commentSent, setCommentSent ] = useState('');

    const handleText = (e) => {
        setText(e.target.value)
        }

    const submitUpdatedComment = async ({id}) => {
        await axios.put(`/comments/${id}`, {
            text: text,
          })
          .then(function (response) {
            setCommentSent(true);
            console.log(response);
            linkToUpdateComment();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        return () => {
            setCommentSent(false)
        }
       }, [commentSent])  
    
    let navigate = useNavigate();
    const linkToUpdateComment = () => {
        navigate('/all-comments')
    }

    // const deleteComment = async ({id}) => {
    //     await axios.delete(`/comments/${id}`)
    // }

    return (
        <div className="add-plant-form">
            <h3>Edit Plant Profile</h3>
            <input 
                type="text"
                name="nickname"
                className='input-field'
                placeholder={selectedPlant.nickname}
                onChange={(e) => handleNickname(e, 'num')}
                />
            <input 
                type="text"
                name="common_name"
                className='input-field'
                placeholder={selectedPlant.common_name}
                onChange={(e) => handleCommonName(e, 'num')}
                />
            <input 
                type="date" 
                name="adoption_date"
                className='input-field'
                placeholder={selectedPlant.adoption_date}
                onChange={(e) => handleAdoptionDate(e, 'num')}
                />
            <input 
                type="text" 
                name="sun_needs"
                className='input-field'
                placeholder={selectedPlant.sun_needs} 
                onChange={(e) => handleSunNeeds(e, 'num')}
                />
            <input 
                type="text" 
                name="drinking_needs"
                className='input-field'
                placeholder={selectedPlant.drinking_needs}
                onChange={(e) => handleDrinkingNeeds(e, 'num')}
                />
            <input 
                type="text" 
                name="image"
                className='input-field'
                id='image'
                placeholder={selectedPlant.image}
                onChange={(e) => handleImage(e, 'num')}
                />
            <input 
                type="text" 
                name="notes"
                className='input-field'
                id='notes-section'
                placeholder={selectedPlant.notes}
                onChange={(e) => handleNotes(e, 'num')}
                />
            <div>
                <Link to="/all-plants">
                    <button className="btn" type="submit" onClick={() => submitUpdatedPlant({id})}>Update</button>
                </Link>
                <Link to="/all-plants">
                    <button className="btn" onClick={() => deletePlant({id})}>Delete</button>
                </Link>
            </div>
            
        </div>
    )
}

export default UpdateComment