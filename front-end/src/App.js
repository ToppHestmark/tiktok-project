import React from 'react';
import './App.css';
import Video from './components/Video';
import myVideo from "./assets/VID_29621228_184120_112.mp4"
import myVideo_2 from "./assets/VID_20181224_124330.mp4"


function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url={myVideo}
          channel="tiptak"
          description="Tip me some coins and I'll show you some magic!"
          song="Lenny Kravits - Fly Away"
          likes={67}
          messages={24}
          shares={65}
        />
        <Video 
          url={myVideo_2}
          channel="icequeen"
          description="I'll take you to the winter wonderland"
          song="Frozen official soundtrack"
          likes={23}
          messages={4}
          shares={8}
        />
      </div>
    </div>
  );
}

export default App;
