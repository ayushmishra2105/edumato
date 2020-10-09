import React, { Component } from "react";
import Pic from "./Pic";
import Details from "./Details";
import Footer from "../footer/footer";

class Restaurantdetails extends Component {
  constructor() {
    super();
    this.state = {
      rest: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <Pic restid={this.props.match.params.id} />
        <Details restid={this.props.match.params.id} />
        <Footer />
      </React.Fragment>
    );
  }
  componentDidMount() {}
}

export default Restaurantdetails;
