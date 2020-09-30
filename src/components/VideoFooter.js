import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import recordIcon from '../assets/record.png';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@animalplanet</h3>
        <p>This is for you</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
              <p> Lenny Kravitz - Fly Away </p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img 
        className="videoFooter__record"
        src={recordIcon} alt=""/>
    </div>
  )
}

export default VideoFooter
