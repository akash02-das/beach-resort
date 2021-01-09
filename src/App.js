import React, { Component } from "react";
import "./App.scss";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Rooms />
        <SingleRoom />
        <Error />
      </>
    );
  }
}

export default App;
