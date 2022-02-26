import React from "react";
import './comments.scss';
import Mohan from '../../assets/images/Mohan-muruge.jpg'

const Comments = (props) => {
     const {comments} = props.chosenVideo;
     console.log(comments)

     return (
        <div className="comments">
                <p>{comments.length} Comments</p>
                <div className="comments__form">
                    <img src={Mohan} className="comments__form--logo"></img>
                    <form className="comments__form--wrap">
                        <label>JOIN THE CONVERSATION</label>
                        <textarea placeholder="Add a new comment"></textarea>
                        <button>Comment</button>
                    </form>
                </div>
                 {comments.map(item => (
                <div className="comments__wrap">
                    <div className = "comments__wrap--circle"></div>
                    <div className="comments__wrap--right">
                        <div className="comments__wrap--top">
                            <p className="comments__wrap--name">{item.name}</p>
                            <p className="comments__wrap--date">{item.timestamp}</p>
                         </div>
                        <p className="comments__wrap--comment">{item.comment}</p>
                     </div>
                     
                </div>      
                 ))}
                                           
        </div>
    )
}


export default Comments