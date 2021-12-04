import React from "react";
import YouTube from 'react-youtube';
import '../styles/user.css'
export default class About extends React.Component{

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target);
    }
    render() {
    const opts = {
      height: '400',
      width: '800',
      playerVars: {
        autoplay: 0,
      },
      
    };
    const {videoId} = this.props
    return (
        <YouTube 
            videoId={videoId} 
            opts={opts}
            onReady={this.videoOnReady} />
        );
  }
};