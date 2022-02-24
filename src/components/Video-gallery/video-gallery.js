import React from "react";
import VideoGalleryData from "../../data/videos.json";
import "../../App.scss";
import "./video-gallery.scss"


const VideoGallery = () => {
    return (
        <div>
            <h5 className="video-header">NEXT VIDEOS</h5>
        {
            VideoGalleryData.slice(1).map(item => (
                <section key={item.id} className="video-list">
                        <img src={item.image} className="video-list__thumbnail"/>
                    <aside className="video-list__aside">
                        <h3 className="video-list__aside--title">{item.title}</h3>
                        <h4 className="video-list__aside--author">{item.channel}</h4>
                    </aside>
                </section>    
    ))
        }
        </div>
    )
}

export default VideoGallery