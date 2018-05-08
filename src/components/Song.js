import React from 'react';

  const Song = (props) => {
      return(
        <div>
          <h3>{props.position} : {props.song["im:name"]["label"]}</h3>
          <p> {props.song["im:artist"]["label"]}</p>
          <img src={props.song["im:image"][2]["label"]}></img>
          <audio controls>
            <source src={props.song.link[1].attributes.href} type="audio/mp4"/>
          </audio>
        </div>
      );
    };



export default Song;
