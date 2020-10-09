import React, { Component } from "react";
import axios from "axios";
import "./Pic.css";
const url = "https://edumatorest.herokuapp.com/restaurantDetails";

class Pic extends Component {
  constructor(props) {
    super();
    this.state = {
      rest: "",
    };
  }
  componentDidMount() {
    var restid = this.props.restid;
    axios.get(`${url}/${restid}`).then((response) => {
      this.setState({ rest: response.data[0] });
      //console.log(">>>>>>>pic>>>>", response.data[0]);
    });
  }
  render() {
    return (
      <div>
        <div
          className="Resturant-img-holder container"
          style={{ marginTop: "30px" }}
        >
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <img
                  src={this.state.rest ? this.state.rest.thumb[0].img : ""}
                  alt="Los Angeles"
                />
              </div>

              <div className="item">
                <img
                  src={this.state.rest ? this.state.rest.thumb[1].img : ""}
                  alt="Chicago"
                />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="Resturant-title-holder container">
          {this.state.rest ? this.state.rest.name : ""}
        </div>
      </div>
    );
  }
}

export default Pic;
