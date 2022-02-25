import Header from './components/Header/header';
import Video from './components/Video/video';
import VideoGallery from './components/Video-gallery/video-gallery';
import './App.scss';
import { useState } from "react";
import VideoDetails from "../src/data/video-details.json"


function App() {

  const [ selected, setSelected ] = useState(VideoDetails[0].title)
  console.log(selected)


  return (
    <div>
      <Header />
      <Video  VideoDetails={VideoDetails} selected={selected}/>
      <VideoGallery VideoDetails = { VideoDetails } setSelected = {setSelected} selected = { selected }
      />
    </div>
  );
}

export default App;