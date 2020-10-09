import React, { Component } from "react";
import "./search.css";
import axios from "axios";

const url = "https://edumatorest.herokuapp.com/location";
const url2 = "https://edumatorest.herokuapp.com/restaurant?city=";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      title: "Find the best restaurants,cafes, bars",
      location: "",
      restaurants: "",
    };
  }
  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ location: response.data });
      //console.log(">>>>>>>>>>>>search",this.state.location)
    });
  
  }
  fillcity() {
    var cities = this.state.location;
    if (cities) {
      return cities.map((item) => {
        return (
          <option data-tokens={item.name} value={item.city} key={item._id}>
            {item.name}
          </option>
        );
      });
    }
  }
  handleCity = (event) => {
    axios.get(`${url2}${event.target.value}`).then((response) => {
      this.setState({ restaurants: response.data });
      //console.log(this.state.restaurants);
    });
  };
  handleRest = (event) => {
    //console.log(event.target.value);
    this.props.restid(Number(event.target.value));
  };
  fillrest = () => {
    var rests = this.state.restaurants;

    if (rests) {
      //console.log(rests);
      return rests.map((rest) => {
        return (
          <option data-tokens={rest.name} value={rest._id} key={rest._id}>
            {rest.name}
          </option>
        );
      });
    }
  };

  render() {
    return (
      <div className="imageContainer">
        <div id="logo">e!</div>
        <div className="heading">{this.state.title}</div>
        <div className="locationSelector">
          <select
            className="locationDropDown"
            data-show-subtext="true"
            data-live-search="true"
            onChange={this.handleCity}
          >
            <option data-tokens="name">----select city----</option>
            {this.fillcity()}
          </select>
          <select className="locationDropDown" onChange={this.handleRest}>
            <option data-tokens="yo">----select resturant----</option>
            {this.fillrest()}
          </select>
        </div>
      </div>
    );
  }
}

export default Search;
