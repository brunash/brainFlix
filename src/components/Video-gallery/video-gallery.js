import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./video-gallery.scss"
import axios from "axios";
import { apiKey } from "../Utilities/utils";
import { apiUrl } from "../Utilities/utils";

const VideoGallery = (props) => {
    const videos = props.VideoDetails;
    const getVideoById = props.getVideoById
    const chosenVideo = props.chosenVideo
    // function VideoGallery({ videoSuggest, chosenVideo }) {
console.log(chosenVideo, "chosen")
    
//     return (
//         <div className="video-next">
//             <h5 className="video-next__header">NEXT VIDEOS</h5>
//             {videoSuggest.map(item => (
//                 <div key={item.id} className="video-next__list" onClick={() => videoSuggest.showNextVideo(item.id)}>
//                         <img src={item.image} className="video-next__list--thumbnail"/>
//                     <aside className="video-next__list--aside">
//                         <h3 className="video-next__list--aside-title">{item.title}</h3>
//                         <h4 className="video-next__list--aside-author">{item.channel}</h4>
//                     </aside>
//                 </div>    
//     ))}
//         </div>
//     )
// }

        return (
                        <div className="video-next">
                            <h5 className="video-next__header">NEXT VIDEOS</h5>
                            {videos?.filter(item => item.id !== chosenVideo.id)
                            .map( item => {
                                return (
                                    < Link to = {
                                        `/home/${item.id}`
                                    } >
                                <div key={item.id} className="video-next__list"
                                //  onClick={() => videoSuggest.showNextVideo(item.id)}
                                 >
                                        <img src={item.image} className="video-next__list--thumbnail"/>
                                    <aside className="video-next__list--aside">
                                        <h3 className="video-next__list--aside-title">{item.title}</h3>
                                        <h4 className="video-next__list--aside-author">{item.channel}</h4>
                                    </aside>
                                </div>
                                </Link>
                                )
                            }) 
                                    
                    
    }                  
     </div>
                        )
                }
    
export default VideoGallery