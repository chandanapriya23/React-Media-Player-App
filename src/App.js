import React from 'react';

const PlayButton = (props) => (
  <button
    aria-label="Play button"
    type="button"
    className="player-controls__btn player-controls__play-btn"
    onClick={props.play}
  />
);

const PauseButton = (props) => (
  <button
    aria-label="Pause button"
    type="button"
    className="player-controls__btn player-controls__pause-btn"
    onClick={props.pause}
  />
);

const NextButton = (props) => (
  <button
    aria-label="Next button"
    type="button"
    className="player-controls__btn player-controls__next-btn"
    onClick = {props.next}
  />
);

const PreviousButton = (props) => (
  <button
    aria-label="Previous button"
    type="button"
    className="player-controls__btn player-controls__prev-btn"
    onClick = {props.previous}
  />
);

const App = () => {
  const tracks = [
    {
      id: 1,
      name: 'Yesterday',
      artist: 'Beatles',
    },
    {
      id: 2,
      name: 'Nothing else matters',
      artist: 'Metallica',
    },
    {
      id: 3,
      name: 'Always',
      artist: 'Bon Jovi',
    },
    {
      id: 4,
      name: 'Waka Waka',
      artist: 'Shakira',
    },
  ];
  const [selectedTrack, setSelectedTrack] = React.useState({ ...tracks[0] });
  const [isPaused, setPaused] = React.useState(false);

  const onNextButtonClick = () => {
    const nextTrackId = selectedTrack.id === 4 ? 0 : selectedTrack.id;
    setSelectedTrack({...tracks[nextTrackId]});
  };
  
  const onPreviousButtonClick = () => {
    const prevTrackId = selectedTrack.id === 1 ? 3 : selectedTrack.id - 2;
    setSelectedTrack({...tracks[prevTrackId]});
  };
  
  const onPause = () => {
    setPaused(false);
  };
  
  const onPlay = () => {
    setPaused(true);
       
  };

  const renderTracks = () => tracks.map((track) => (
    <div className={`tracks-list__item ${selectedTrack.id === track.id ? 'tracks-list__item--selected' : ''}`} key={track.id}>
      <span className="tracks-list__name">{track.name}</span>
      <span className="tracks-list__artist">
        &nbsp;—&nbsp;
        {track.artist}
      </span>
    </div>
  ));

  return (
    <main>
      <div className="tracks-list">
        <h1>Media Player App</h1>
        <h2 className="tracks-list__title">Tracks</h2>
        {renderTracks()}
      </div>
      <div className="player-controls">
        <PreviousButton previous={onPreviousButtonClick}/>
       
       {isPaused ? <PauseButton pause={onPause}/> : <PlayButton play={onPlay}/>} 
        <NextButton next={onNextButtonClick} />
        <div className="player-controls__track">
          <span className="track__name">{selectedTrack.name}</span>
          <span className="track__artist">{selectedTrack.artist}</span>
        </div>
      </div>
    </main>
  );
};

export default App;