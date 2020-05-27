import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  getActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  renderContent(stream) {
    if (!this.props.stream) {
      return "Are you sure you want to delete?";
    }
    return `Are you sure you want to delete stream: ${stream.title}`;
  }

  render() {
    const { stream } = this.props;
    return (
      <Modal
        title="Delete Stream?"
        content={this.renderContent(stream)}
        actions={this.getActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  {
    fetchStream: fetchStream,
    deleteStream: deleteStream
  }
)(StreamDelete);
