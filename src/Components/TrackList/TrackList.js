import React from 'react';
import Track from './../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        const tracks = this.props.searchResults.map(track => {
            return <Track key={track.id} track={track} onAdd={this.props.onAdd} />;
        });

        return (
            <div class="TrackList">
                {tracks}
            </div>
        );
    }
}

export default TrackList;

