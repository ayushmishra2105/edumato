import React, { Component } from "react";
import axios from "axios";

const restdetail = "https://edumatorest.herokuapp.com/restaurantlist";
class CostFilter extends Component {
  costFilter = (event) => {
    let mealid = this.props.mealIdNumber;
    let cost = event.target.value.split(",");
    let lcost = Number(cost[0]);
    let hcost = Number(cost[1]);
    let url;
    if (event.target.value === "") {
      url = `${restdetail}/${mealid}`;
      //console.log(url);
    } else {
      url = `${restdetail}/${mealid}?lcost=${hcost}&hcost=${lcost}`;
      //console.log(url);
    }
    axios.get(url).then((response) => {
      this.props.restpercost(response.data);
    });
  };

  render() {
    return (
      <React.Fragment>
        <center>Cost To Filter</center>
        <hr />
        <div onChange={this.costFilter}>
          <label className="radio">
            <input type="radio" value="" name="range" />
            All
          </label>
          <label className="radio">
            <input type="radio" value="100,300" name="range" />
            100-300
          </label>
          <label className="radio">
            <input type="radio" value="301,500" name="range" />
            301-500
          </label>
          <label className="radio">
            <input type="radio" value="501,1000" name="range" />
            501-1000
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default CostFilter;
