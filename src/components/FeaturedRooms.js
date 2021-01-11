import React, { Component } from "react";
import Loading from "./Loading";
import Room from "./Room";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        <h4>Featured Rooms</h4>
        <Room />
        <Loading />
      </div>
    );
  }
}

export default FeaturedRooms;
