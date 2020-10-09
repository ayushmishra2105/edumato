import React, { Component } from "react";
import axios from "axios";

const restdetail = "https://edumatorest.herokuapp.com/restaurantlist";
class CusineFilter extends Component {
  constructor(props) {
    super();
  }
  cuisineFilter = (event) => {
    let mealid = this.props.mealIdNumber;
    let cuisine = event.target.value;

    let url;
    if (cuisine === "") {
      url = `${restdetail}/${mealid}`;
    } else {
      url = `${restdetail}/${mealid}?cuisine=${cuisine}`;
    }
    axios.get(url).then((response) => {
      this.props.restpercuisine(response.data);
    });
  };

  render() {
    return (
      <React.Fragment>
        <center>Cuisine</center>
        <hr />
        <div onChange={this.cuisineFilter}>
          <label className="radio">
            <input type="radio" value="" name="cuisine" />
            All
          </label>
          <label className="radio">
            <input type="radio" value="1" name="cuisine" />
            North Indian
          </label>
          <label className="radio">
            <input type="radio" value="2" name="cuisine" />
            South Indian
          </label>
          <label className="radio">
            <input type="radio" value="3" name="cuisine" />
            Chinese
          </label>
          <label className="radio">
            <input type="radio" value="4" name="cuisine" />
            Fast Food
          </label>
          <label className="radio">
            <input type="radio" value="5" name="cuisine" />
            Street Food
          </label>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default CusineFilter;
