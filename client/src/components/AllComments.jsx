import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AllComments = (props) => {

    let { id } = useParams()

    // axios get for plant comments
    const getComments = async () => {
        const res = await axios.get(`http://localhost:3001/plants/${id}`)
        console.log(res.data.plant.comments)
        props.setComments(res.data.plant.comments)
    }
    // axios post for new comments
    //use Effect for making axios calls for comments when mounted:
    useEffect(() => {
        getComments();
        
       }, [])


    return (
        props.comments.map((comment) => {
            return (
                <div className="comment" key={comment._id}>
                    <p className="comment-text">{comment.text}</p>
                </div> 
            )
        })
    
    )
}
export default AllComments