import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AddComment = (props) => {


    const handleComment = (e) => {
        props.setComment(e.target.value)
        }

    const submitComment = async (comment) => {
        await axios.post(`/comments/${props.id}`, {
            text: comment
          })
          .then(function (response) {
            props.setCommentSent(!props.commentSent);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

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
                <button className="btn" id='add-comment' type="submit" onClick={() => submitComment(props.comment)}>Add comment</button>
        </div>
        
    )
}

export default AddComment