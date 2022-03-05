import Video from '../Video/video';
import Description from '../Description/description';
import Comments from '../Comments/comments';
import VideoGallery from '../Video-gallery/video-gallery';
import VideoDetails from "../../data/video-details.json"
import sideVideos from "../../data/videos.json"
import { Component } from "react";
import axios from 'axios';
import { apiKey, apiUrl } from '../Utilities/utils';


class HomePage extends Component {
    state = {
        videoSuggest: [],
        chosenVideo: {}
    };
    // showNextVideo = (id) => {
    //   axios
    //   .get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
    //   .then(response => {
    //     console.log(response.data)
      
    //     const videoHero = VideoDetails.filter((video) => video.id === id);
    //     const chosenVideo = videoHero[0];
    //     const videoList = sideVideos.filter((video) => video.id !== id);
    //     this.setState({
    //         videoSuggest: videoList,
    //         chosenVideo: chosenVideo,
    //         videoSuggest: response.data,
    //         chosenVideo: response.data
    //     });
    //   }).catch(err => console.log(err))
    // };
    

        getVideoById = (id) => {
          axios
            .get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
            .then(response => {
              console.log(response.data)
              this.setState({
                chosenVideo: response.data
              })
            })
            .catch(err => console.log(err))
        }

    componentDidMount() {
      axios
      // .get(`${apiUrl}/videos/?api_key=${apiKey}`)
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=c5d44c26-c02c-4682-9204-c7e0e0a7e9b0`)
        .then(response => {
          this.setState({
            videoSuggest: response.data
          })
          //console.log(videoSuggest)
          // this conditional checks if a parameter exists in the url, if not use the name of the pokemon at index 0 in response.data.results
          const videoId = this.props.match.params.videoId || response.data[0].id
          // sets state for the currentPokemon based on the name supplied to the function
          this.getVideoById(videoId);
        })
        .catch(err => console.log(err))
    }



    componentDidUpdate(prevProps, prevState) {
      const videoId = this.props.match.params.id || this.state.videoSuggest[0];

      if(prevState.chosenVideo && prevState.chosenVideo.id !== videoId) {
        this.getVideoById(videoId)
      }
    }


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
          <VideoGallery VideoDetails={this.state.videoSuggest} getVideoById={this.getVideoById} chosenVideo={this.state.chosenVideo}/>
        </section>
      </section>
      </>
    )
}
}

export default HomePage 