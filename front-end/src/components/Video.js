import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
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
        src={url}
        loop>
      </video>

      <VideoFooter 
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
    </div>
  )
}

export default Video
