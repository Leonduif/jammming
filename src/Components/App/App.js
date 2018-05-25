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
      playlistName: 'New Playlist',
      playlistTracks: [{
        name: 'name here',
        artist: 'artist here',
        album: 'album here',
        id: 1,
        uri: 'asdasasd'
      }]
    };

    this.addTrack           = this.addTrack.bind(this);
    this.removeTrack        = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist       = this.savePlaylist.bind(this);
    this.search             = this.search.bind(this);
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

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
  }

  search(query) {
    console.log(query);
  }

  render() {
      return (
          <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch={this.search} />
              <div className="App-playlist">
                  <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                  <Playlist onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onSave={this.savePlaylist} />
              </div>
            </div>
          </div>
      );
  }
}

export default App;