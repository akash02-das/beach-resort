import React, { Component, createContext } from "react";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    greeting: "Welcome",
    name: "John",
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
