import React from "react";
import './video.scss';


const Video = (props) => {

    const{image} = props.chosenVideo;

    return (
        <div className="video">
                <div >
                        <video poster={image} controls className="video__hero">
                            <source src=""/>
                        </video>
                </div> 
        </div>              
    ) 
    
}

export default Video