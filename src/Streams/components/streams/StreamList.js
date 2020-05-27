import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    // if (this.props.currentUserId === "1111") {
    return (
      <div className="right floated content">
        <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
          EDIT
        </Link>
        <Link
          className="ui button negative"
          to={`/streams/delete/${stream.id}`}
        >
          DELETE
        </Link>
      </div>
    );
    // }
  }

  renderCreate() {
    // if (this.props.isSignedIn) {
    return (
      <div>
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
    // }
  }

  renderList(streams) {
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { streams } = this.props;
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList(streams)}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  {
    fetchStreams: fetchStreams
  }
)(StreamList);
