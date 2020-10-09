import React, { Component } from "react";
import axios from "axios";
import './order.css';
const url = "https://edumatorest.herokuapp.com/cart?email=";
const surl = "https://edumatorest.herokuapp.com/placeorder";
const durl = "https://edumatorest.herokuapp.com/delcart";


class Form extends Component {
  constructor() {
    super();
    this.state = {
      items: "",
      order_id: Math.floor(Math.random() * 10000),
      email: localStorage.getItem("useremail"),
      address: "",
      total: localStorage.getItem("total"),
    };
  }
  componentDidMount() {
    var email = localStorage.getItem("useremail");
    axios.get(`${url}${email}`).then((response) => {
      this.setState({ items: response.data });
    });
  }
  handleChangeAddress = (event) => {
    this.setState({ address: event.target.value });
  };
  handleSubmit = () => {
    var data = {
      _id: this.state.order_id,
      items: this.state.items,
      email: this.state.email,
      address: this.state.address,
      total: this.state.total,
    };
    fetch(surl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      axios.get(durl).then((response) => {
        //console.log("deleted");
      }),
      localStorage.clear(),
      this.props.history.push("/")
      
    );
    alert("order placed")
  };
  render() {
    return (
      <div class="container">
        <div class="jumbotron">
          <h2>
            Your preferences have been saved! Enter the address you want to be
            delivered to
          </h2>
          <p></p>

          <div className="form-group">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              required
              onChange={this.handleChangeAddress}
            />
            <button
              type="button"
              class="btn btn-primary order-submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <button type="button" class="btn btn-danger order-cancel">
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
