import React, { Component } from "react";
import axios from "axios";
import ListingDisplay from "./listingdisplay";
import CostFilter from "../filter/costFilter";
import CusineFilter from "../filter/cuisineFilter";
import "./listingdisplay.css";
import Footer from "../footer/footer";

const lurl = "https://edumatorest.herokuapp.com/restaurantlist/";

class Listingapi extends Component {
  constructor(props) {
    super();

    this.state = {
      restListing: "",
    };
  }

  setDataPerFilter(sortedData) {
    this.setState({ restListing: sortedData });
  }

  render() {
    //console.log(this.props.match.params.id);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-2 filterthing">
              <CusineFilter
                mealIdNumber={this.props.match.params.id}
                restpercuisine={(data) => {
                  this.setDataPerFilter(data);
                }}
              />
              <CostFilter
                restpercost={(data) => {
                  this.setDataPerFilter(data);
                }}
                mealIdNumber={this.props.match.params.id}
              />
            </div>
            <div className="col-md-10">
              <ListingDisplay restdata={this.state.restListing} />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    var mealId = this.props.match.params.id;
    sessionStorage.setItem("type", mealId);
    //console.log(">>>>>in the listing api", mealId);
    axios.get(`${lurl}${mealId}`).then((response) => {
      this.setState({ restListing: response.data });
    });
    //console.log(">>>>>in the listing api", this.state.restListing);
  }
}

export default Listingapi;
