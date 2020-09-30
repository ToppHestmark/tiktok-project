import React, { useRef, useState } from 'react';
import './Video.css';
import myVideo from "../assets/VID_29621228_184120_112.mp4"

function Video() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video 
        ref={videoRef}
        className="video__player"
        onClick={handleVideoPress}
        src={myVideo}
        loop>
      </video>
    </div>
  )
}

export default Video
