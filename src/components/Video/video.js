import React from "react";
import './video.scss';
import viewsLogo from '../../assets/images/views.svg'
import likesLogo from '../../assets/images/likes.svg'


const Video = ({VideoDetails, selected}) => {

    return (
        <div className="video">
            {VideoDetails.filter(item => item.title === selected).map((item) => (
                <div key={item.id} >
                        <video poster={item.image} controls className="video__hero">
                            <source src=""/>
                        </video>
                        <h1>{item.title}</h1>
                        <h3>{item.channel}</h3>
                        <p>{item.timestamp}</p>
                        <p><img src={viewsLogo}/>{item.views}</p>
                        <p><img src={likesLogo}/>{item.likes}</p>
                        <p>{item.description}</p>
                        <div>
                            <form>
                            <label>JOIN THE CONVERSATION</label>
                            <textarea placeholder="Add a new comment"></textarea>
                            <button>Comment</button>
                            </form>
                        </div>
                        <div>


                        </div>
                        
                </div>

         ))}
        </div>              
    ) 
    
}

export default Video