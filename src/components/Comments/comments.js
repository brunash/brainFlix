import React from "react";
import './comments.scss';

const Comments = (props) => {
     const {comments} = props.chosenVideo;
     console.log(comments)

     return (
        <div>
                <form>
                <label>JOIN THE CONVERSATION</label>
                <textarea placeholder="Add a new comment"></textarea>
                <button>Comment</button>
                </form>
                 {comments.map(item => (
                <div>
                     <p>{item.name}</p>  
                     <p>{item.comment}</p>
                     <p>{item.timestamp}</p>
                </div>      
                 ))}
                                           
        </div>
    )
}


export default Comments