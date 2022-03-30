import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddComment = (props) => {

    const [ comment, setComment ] = useState('');
    const [ commentSent, setCommentSent ] = useState('');

    const handleComment = (e) => {
        setComment(e.target.value)
        }

    const submitComment = async () => {
        await axios.post(`http://localhost:3001/comments/${props.id}`, {
            text: comment
          })
          .then(function (response) {
            setCommentSent(true);
            console.log(response);
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

    return (
        <div className="add-comment-form">
            <input 
                type="text"
                name="text"
                className='input-field'
                placeholder="Type your comment here..." 
                onChange={(e) => handleComment(e, 'num')}
                />
            <button className="add-comment-button" type="submit" onClick={() => submitComment()}>Add comment</button>
        </div>
    )
}

export default AddComment