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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    this.state.playlistTracks.forEach(playlistTrack => {
      if (playlistTrack.id === track.id) {
        this.setState({
          playlistTracks: this.state.playlistTracks.concat(track);
        });
        break;
      }
    });
  }

  removeTrack(track) {
    this.state.playlistTracks.forEach((playlistTrack, index) => {
      if (playlistTrack.id === track.id) {
        this.setState({
          playlistTracks: this.state.playlistTracks.splice(index)
        });
        break;
      }
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
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
                  <Playlist tracks={this.state.playlistTracks} onRemove={this.props.removeTrack} onNameChange={this.updatePlaylistName} />
              </div>
            </div>
          </div>
      );
  }
}

export default App;