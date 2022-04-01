import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AddComment = (props) => {

    const [ comment, setComment ] = useState('');
    const [ commentSent, setCommentSent ] = useState('');
    const [ comments, setComments ] = useState([])

    const handleComment = (e) => {
        setComment(e.target.value)
        }

    const submitComment = async (comment) => {
        await axios.post(`http://localhost:3001/comments/${props.id}`, {
            text: comment
          })
          .then(function (response) {
            setCommentSent(!commentSent);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        const fetchData = async ()=> {
            const res = await axios.get('http://localhost:3001/comments')
            setComments(res.data.comments);
            console.log(res.data.comments);
        }
        fetchData()
        .catch(console.error);;
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