import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddPlant = (props) => {

    const [ nickname, setNickname ] = useState('');
    const [ commonName, setCommonName ] = useState('');
    const [ adoptionDate, setAdoptionDate ] = useState('');
    const [ sunNeeds, setSunNeeds ] = useState('');
    const [ drinkingNeeds, setDrinkingNeeds ] = useState('');
    const [ image, setImage ] = useState('');
    const [ notes, setNotes ] = useState('');
    const [ plantSent, setPlantSent ] = useState('');

    const handleNickname = (e) => {
        setNickname(e.target.value)
        }

    const handleCommonName = (e) => {
        setCommonName(e.target.value)
        }
    
    const handleAdoptionDate = (e) => {
        setAdoptionDate(e.target.value)
        }

    const handleSunNeeds = (e) => {
        setSunNeeds(e.target.value)
        }
    
    const handleDrinkingNeeds = (e) => {
        setDrinkingNeeds(e.target.value)
        }
    
    const handleImage = (e) => {
        setImage(e.target.value)
        }

    const handleNotes = (e) => {
        setNotes(e.target.value)
        }

    const submitPlant = async () => {
        await axios.post(`/plants/create-plant`, {
            nickname: nickname,
            common_name: commonName,
            adoption_date: adoptionDate,
            sun_needs: sunNeeds,
            drinking_needs: drinkingNeeds,
            image: image,
            notes: notes
          })
          .then(function (response) {
            setPlantSent(true);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        return () => {
            setPlantSent(false)
        }
       }, [plantSent])  

    return (
        <div className="add-plant-form">
            <h3>Create your plant's profile!</h3>
            <input 
                type="text"
                name="nickname"
                className='input-field'
                placeholder="nickname" 
                onChange={(e) => handleNickname(e, 'num')}
                />
            <input 
                type="text"
                name="common_name"
                className='input-field'
                placeholder="common/latin name"
                onChange={(e) => handleCommonName(e, 'num')}
                />
            <input 
                type="date" 
                name="adoption_date"
                className='input-field'
                placeholder="adoption date" 
                onChange={(e) => handleAdoptionDate(e, 'num')}
                />
            <input 
                type="text" 
                name="sun_needs"
                className='input-field'
                placeholder="sun needs" 
                onChange={(e) => handleSunNeeds(e, 'num')}
                />
            <input 
                type="text" 
                name="drinking_needs"
                className='input-field'
                placeholder="drinking needs" 
                onChange={(e) => handleDrinkingNeeds(e, 'num')}
                />
            <input 
                type="text" 
                name="image"
                className='input-field'
                id='image'
                placeholder="image URL" 
                onChange={(e) => handleImage(e, 'num')}
                />
            <input 
                type="text" 
                name="notes"
                className='input-field'
                id='notes-section'
                placeholder="notes" 
                onChange={(e) => handleNotes(e, 'num')}
                />
            <Link to="/all-plants">
            <button className="add-plant-button" type="submit" onClick={() => submitPlant()}>Add your plant!</button>
            </Link>
            
        </div>
    )
}

export default AddPlant