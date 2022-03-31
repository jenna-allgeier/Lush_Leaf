import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AllComments = (props) => {

    const [ comments, setComments ] = useState([])

    // axios get for plant comments
    const getComments = async () => {
        const res = await axios.get(`http://localhost:3001/comments/${props.id}`)
        console.log((res.data.comments))
        setComments(res.data.comments)
    }
    // axios post for new comments
    //use Effect for making axios calls for comments when mounted:
    useEffect(() => {
        getComments();
        
       }, [])
    return (
        comments.map((comment) => {
            console.log(comment)
            return (
                <div className="comment" key={comment._id}>
                    <p className="comment-text">{comment.text}</p>
                </div> 
            )
        })
    
    )
}
export default AllComments