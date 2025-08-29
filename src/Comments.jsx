import {useState} from 'react';
import './Comments.css';
import CommentForm from './CommentForm';
export default function Comments(){
    let [comments , setComments] = useState([{
        username:'krati',
        remarks:'greate job',
        rating:5,
    }]);
    // function which pass to Comments.jsx to envoke while submision

     let addComment = (comment)=>{
          setComments((currComments)=>[
            ...currComments,comment
          ]);
          console.log('added new comment');
     }
    return(
        <div>
            <div>
            <h1>All Comments !!</h1>
            {comments.map((comment,idx)=>(
                <div className='comment' key={idx}>
                  <span>{comment.remarks}</span>
                   &nbsp;
                  <span> rating = {comment.rating}</span>
                  <p>{comment.username}</p>
                </div>
            ))}
            </div>
            <hr />
            <CommentForm addNewComment={addComment}/>
        </div>
    )
}
