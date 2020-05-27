import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "../Spinner/Spinner";

class SeasonApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.lat && !this.state.errorMessage) {
      return <Spinner message="Please choose location..." />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SeasonApp;
