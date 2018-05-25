import React from 'react';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
      playlistName: 'New Playlist',
      playlistTracks: [{
        name: 'name here',
        artist: 'artist here',
        album: 'album here',
        id: 123
      }]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    playlistTracks.forEach(playlistTrack => {
      if (playlistTrack.id === track.id) {
        this.setState({
          playlistTracks: playlistTracks.concat(track);
        });
        break;
      }
    });
  }

  render() {
      return (
          <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar />
              <div className="App-playlist">
                  <SearchResults searchResults={this.state.searchResults} />
                  <Playlist tracks={this.state.playlistTracks} />
              </div>
            </div>
          </div>
      );
  }
}

export default App;