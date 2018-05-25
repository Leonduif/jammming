import React from 'react';
import './Track.css';


class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  renderAction() {
    return this.props.isRemoval ? <a className="Track-action">-</a> ? <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
          </div>
          <a className="Track-action"><!-- + or - will go here --></a>
        </div>
    );
  }
}

export default Track;

