import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
  const songNodes = props.songs.map((song, index) => {
    return <Song
      song={song}
      position={index + 1}
      key={index}
      className="song"
      />
  });

  return(
    <div className="song-list">
      {songNodes}
    </div>
  );
};

export default SongList;
