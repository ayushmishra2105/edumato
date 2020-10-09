import React, { Component } from "react";
import "./Details.css";
import Foodtile from "./foodtile";
import axios from "axios";
const url2 = "https://edumatorest.herokuapp.com/restaurantDetails";
const url = "https://edumatorest.herokuapp.com/food?rest=";
var count = 1;

class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      food: "",
      rest: "",
    };
  }
  componentDidMount() {
    var restid = this.props.restid;
    axios.get(`${url2}/${restid}`).then((response) => {
      this.setState({ rest: response.data[0] });
    });
  }
  fillfood() {
    if (this.state.rest && count === 1) {
      count += 1;
      axios.get(`${url}${this.state.rest.name}`).then((response) => {
        this.setState({ food: response.data });
        //console.log("fetch>>>>>> ", this.state.food);
        //console.log("fetch>>>>>> ", this.state.rest.name);
      });
    }
    var foods = this.state.food;
    if (foods) {
      return foods.map((item) => {
        return (
          <div>
            <Foodtile food={item} />
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="tabs container">
        {/* {console.log("render")}
        {console.log(this.state.rest)}
        {console.log(this.state.food)} */}
        <Tabs>
          <Tab label="Overview">
            <div>
              <div className="about_place">About This Place</div>
              <br />
              <div className="about_cuisine">Cuisine</div>
              <div className="about_cuisine_a">
                {this.state.rest ? this.state.rest.Cuisine[0].name : ""}
                {this.state.rest ? this.state.rest.Cuisine[1].name : ""}
              </div>
              <div className="about_cost">
                Cost For 2 : Rs. {this.state.rest ? this.state.rest.cost : ""}
              </div>
            </div>
          </Tab>
          <Tab label="contact">
            <div>
              <div className="phone">
                <div className="phone-heading">Phone Number</div>
                <div className="phone-number">+91 114004566 </div>
              </div>

              <div className="address">
                <div className="address-heading">
                  {this.state.rest ? this.state.rest.name : ""}
                </div>
                <div className="address-content">
                  {this.state.rest ? this.state.rest.address : ""}
                </div>
              </div>
            </div>
          </Tab>

          <Tab label="Order online">{this.fillfood()}</Tab>
        </Tabs>
      </div>
    );
  }
}
class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
export default Details;
