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
                        <h1 className="video__title">{item.title}</h1>
                        <hr></hr>
                        <div className="video__info">   
                            <div className="video__info--left">
                                <h3 className="video__info--channel">By {item.channel}</h3>
                                <p className="video__info--date">{item.timestamp}</p>
                            </div>
                            <div className="video__info--right">
                                <p className="video__info--views"><img src={viewsLogo} className="video__info--logo"/>{item.views}</p>
                                <p className="video__info--likes"><img src={likesLogo} className="video__info--logo"/>{item.likes}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <p className="video__description">{item.description}</p>
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