import Video from '../Video/video';
import Description from '../Description/description';
import Comments from '../Comments/comments';
import VideoGallery from '../Video-gallery/video-gallery';
import VideoDetails from "../../data/video-details.json"
import sideVideos from "../../data/videos.json"
import { Component } from "react";


const videoList = [...sideVideos];
videoList.shift();



class HomePage extends Component {
    state = {
        videoSuggest: videoList,
        chosenVideo: VideoDetails[0],
    };
    showNextVideo = (id) => {
        const videoHero = VideoDetails.filter((video) => video.id === id);
        const chosenVideo = videoHero[0];
        const videoList = sideVideos.filter((video) => video.id !== id);
        this.setState({
            videoSuggest: videoList,
            chosenVideo: chosenVideo,
        });
    };
    render () {
    return (
        <>
        <Video chosenVideo={this.state.chosenVideo}/>
      <section className='main'>
        <section className='main__left'>
          <Description chosenVideo={this.state.chosenVideo}/>
          <Comments chosenVideo={this.state.chosenVideo}/>
        </section>
        <section className='main__right'>  
          <VideoGallery VideoDetails={this.state.videoSuggest} showNextVideo={this.showNextVideo}/>
        </section>
      </section>
      </>
    )
}
}

export default HomePage 