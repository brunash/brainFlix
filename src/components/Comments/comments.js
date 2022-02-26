import React from "react";
import './comments.scss';
import Mohan from '../../assets/images/Mohan-muruge.jpg'
import CommentLogo from '../../assets/images/add_comment.svg'

const Comments = (props) => {
     const {comments} = props.chosenVideo;
     console.log(comments)
     return (
        <div className="comments">
                <p className="comments__count">{comments.length} Comments</p>
                <div className="comments__form">
                    <img src={Mohan} className="comments__form--logo"></img>
                    <form className="comments__form--wrap">
                       <div className="comments__form--input-wrap-big">
                        <label className="comments__form--label" for="input">JOIN THE CONVERSATION</label>
                        <textarea placeholder="Add a new comment" className="comments__form--input" name="input"></textarea>
                       </div> 
                        <button className="comments__form--button"><img src={CommentLogo} className="comments__form--addcomment"/>Comment<span className="comments__form--empty"></span></button>
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