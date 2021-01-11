import React, { Component } from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        <h4>Featured Rooms</h4>
      </div>
    );
  }
}

export default FeaturedRooms;
