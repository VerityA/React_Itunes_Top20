import React, {Component} from 'react';
import SongList from '../components/SongList.js';

class SongBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  };

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const musicData = JSON.parse(jsonString);

      this.setState({songs: musicData.feed.entry});
    });

    request.send();
  };


   render() {

    return (
      <div>
        <h2>UK Top 20 Songs</h2>
        <SongList songs={this.state.songs}/>
      </div>

    );
  };
};


export default SongBox;
