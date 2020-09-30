import React from 'react';
import './Video.css';
import myVideo from "../assets/VID_29621228_184120_112.mp4"

function Video() {
  return (
    <div className="video">
      <video 
        className="video__player"
        src={myVideo}
        autoPlay
        loop>
      </video>
    </div>
  )
}

export default Video
