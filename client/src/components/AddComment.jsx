import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AddComment = (props) => {

    const [ comment, setComment ] = useState('');
    const [ commentSent, setCommentSent ] = useState('');

    const handleComment = (e) => {
        setComment(e.target.value)
        }

    const submitComment = async (comment) => {
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
        <div>
            <div className="add-comment-form">
                <input 
                    type="text"
                    name="text"
                    className='input-field'
                    placeholder="What a nice plant!" 
                    onChange={(e) => handleComment(e, 'num')}
                    />
            </div>
                <button className="btn" id='add-comment' type="submit" onClick={() => submitComment(comment)}>Add comment</button>
        </div>
        
    )
}

export default AddComment