import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AllComments = (props) => {

    let { id } = useParams()

    // axios get for plant comments
    const getComments = async () => {
        const res = await axios.get(`http://localhost:3001/plants/${id}/comments`)
        props.setComments(res.data.comments)
    }
    // axios post for new comments
    //use Effect for making axios calls for comments when mounted:
    useEffect(() => {
        getComments();
        
       }, [props.comment])


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