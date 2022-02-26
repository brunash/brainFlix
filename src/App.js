import Header from './components/Header/header';
import Video from './components/Video/video';
import VideoGallery from './components/Video-gallery/video-gallery';
import './App.scss';
import { Component } from "react";
import VideoDetails from "../src/data/video-details.json"
import sideVideos from "../src/data/videos.json"
import Description from './components/Description/description';
import Comments from './components/Comments/comments';

const videoList = [...sideVideos];
videoList.shift();

class App extends Component {

  // const [ selected, setSelected ] = useState(VideoDetails[0].title)
  // console.log(selected)

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
    <div>
      <Header />
      <Video chosenVideo={this.state.chosenVideo}/>
      <Description chosenVideo={this.state.chosenVideo}/>
      <Comments chosenVideo={this.state.chosenVideo}/>
      <VideoGallery VideoDetails={this.state.videoSuggest} showNextVideo={this.showNextVideo}
      />
    </div>
  );}
}

export default App;
