import React from 'react';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'name here',
          artist: 'artist here',
          album: 'album here',
          id: 1
        },
        {
          name: 'name here 2',
          artist: 'artist here 2',
          album: 'album here 2',
          id: 2
        }
      ],
      playlistName: 'New Playlist asdasd',
      playlistTracks: [{
        name: 'name here',
        artist: 'artist here',
        album: 'album here',
        id: 1
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    this.setState({
      playlistTracks: [...this.state.playlistTracks, track]
    });
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(selectedTrack => selectedTrack.id !== track.id)
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
                  <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                  <Playlist onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
              </div>
            </div>
          </div>
      );
  }
}

export default App;