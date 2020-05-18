import React, { Component } from "react";
import GuestCard from "../card_component/guestCard";
import ViewCard from "../card_component/listViewCards";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <GuestCard />
        <ViewCard />
      </React.Fragment>
    );
  }
}

export default Home;
