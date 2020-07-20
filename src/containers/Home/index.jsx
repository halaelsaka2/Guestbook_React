import React, { Component } from "react";
import GuestCard from "../../components/GuestCard";
import ViewCard from "../../components/ListViewCard";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="project-container">
        <GuestCard />
        <ViewCard />
      </div>
    );
  }
}

export default Home;
