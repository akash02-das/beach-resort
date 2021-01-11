import React, { Component } from "react";
import defaultBcg from '../images/room-2.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';

class SingleRoom extends Component {
  constructor(props){
    super(props);
    // console.log(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }

  static contextType = RoomContext;

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    return (
      <div>
        <h1>Single Room Page</h1>
      </div>
    );
  }
}

export default SingleRoom;
