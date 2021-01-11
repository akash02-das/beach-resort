import React, { Component } from "react";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { RoomContext } from "../context";
import "../styles/featuredRooms.scss";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => <Room key={room.id} room={room} />);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
