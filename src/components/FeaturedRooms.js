import React, { Component } from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { greeting, name } = this.context;

    return (
      <div>
        <h4>
          {greeting} {name} from Featured Rooms
        </h4>
      </div>
    );
  }
}

export default FeaturedRooms;
