import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePlant = () => {

    const [ selectedPlant, setPlant ] = useState({})

    let { id } = useParams()

    const getPlantById = async () => {
        const res = await axios.get(`http://localhost:3001/plants/${id}`)
        setPlant(res.data.plant)
    }

    useEffect(() => {
       getPlantById();
       return () => {
           setPlant({})
       }
      }, [])

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

    const submitUpdatedPlant = async ({id}) => {
        await axios.put(`http://localhost:3001/plants/${id}`, {
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
            linkToUpdatePlant();
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
    
    let navigate = useNavigate();
    const linkToUpdatePlant = () => {
        navigate('/all-plants')
    }

    const deletePlant = async ({id}) => {
        await axios.delete(`http://localhost:3001/plants/${id}`)
    }

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
                    <button className="add-plant-button" type="submit" onClick={() => submitUpdatedPlant({id})}>Update</button>
                </Link>
                <Link to="/all-plants">
                    <button className="update-plant-btn" onClick={() => deletePlant({id})}>Delete</button>
                </Link>
            </div>
            
        </div>
    )
}

export default UpdatePlant