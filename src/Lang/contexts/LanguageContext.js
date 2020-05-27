import React from "react";

const Context = React.createContext("english");

class LanugageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language: language });
  };

  render() {
    return <Context.Provider value={{ ...this.state, this.onLanguageChange }} />;
  }
}
