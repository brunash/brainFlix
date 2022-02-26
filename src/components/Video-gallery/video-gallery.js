import React from "react";
import VideoGalleryData from "../../data/videos.json";
import "../../App.scss";
import "./video-gallery.scss"


const VideoGallery = (props) => {
    const videos = props.VideoDetails;
    const show = props.showNextVideo;

    return (
        <div>
            <h5 className="video-header">NEXT VIDEOS</h5>
        {videos.map(item => (
                <div key={item.id} className="video-list" onClick={() => props.showNextVideo(item.id)}>
                        <img src={item.image} className="video-list__thumbnail"/>
                    <aside className="video-list__aside">
                        <h3 className="video-list__aside--title">{item.title}</h3>
                        <h4 className="video-list__aside--author">{item.channel}</h4>
                    </aside>
                </div>    
    ))}
        </div>
    )
}

export default VideoGallery