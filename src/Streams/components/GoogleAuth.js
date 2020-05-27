import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2"); //init here.
    //mock sign in after 2 sec
  }

  onSignInClick = () => {
    this.props.signIn(1111);
  };

  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthLink() {
    const { isSignedIn } = this.props;
    console.log(this.props);
    if (isSignedIn) {
      return (
        <div>
          <button onClick={() => this.onSignOutClick()}>SignOut</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => this.onSignInClick()}>SignIn</button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthLink()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  {
    signIn: signIn,
    signOut: signOut
  }
)(GoogleAuth);
