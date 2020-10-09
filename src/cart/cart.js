import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
const url = "https://edumatorest.herokuapp.com/cart?email=";
const durl = "https://edumatorest.herokuapp.com/cart/";
class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      cartitems: "",
      values: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("total") === null) {
      localStorage.setItem("total", 0);
    }
    if (this.props.useremail) {
      localStorage.setItem("useremail", this.props.useremail);
      axios.get(`${url}${this.props.useremail}`).then((response) => {
        this.setState({ cartitems: response.data });
        var counts = response.data.map((item) => {
          var temp = localStorage.getItem(item.name);
          return {
            id: item._id,
            count: temp ? temp : 1,
            name: item.name,
            price: item.price,
          };
        });
        this.setState({ values: counts });
        for (var i = 0; i < counts.length; i++) {
          if (localStorage.getItem(counts[i].name === null)) {
            localStorage.setItem(counts[i].name, 1);
          }
        }
        //console.log(">>>>>values", this.state.values);
      });
    }
  }
  increaseval(item) {
    //console.log(">>>>to increase");
    var x = Number(localStorage.getItem(item.name));
    //if (this.state.values) {
    var index = this.state.values.findIndex((z) => z.id === item._id);
   // console.log(">>>>", index);
    if (index === -1) {
      // handle error
      console.log(">>>>>>increase error");
    } else {
      var items = this.state.values;
      var update = {
        id: item._id,
        count: x + 1,
        name: item.name,
        price: item.price,
      };
      items[index] = update;
      localStorage.setItem(item.name, Number(x + 1));
      this.setState({ values: items });

      // this.setState({
      //   values: [
      //     ...this.state.values.slice(0, index),
      //     Object.assign({}, this.state.values[index], {
      //       id: item._id,
      //       count: x + 1,
      //       name: item.name,
      //       price: item.price,
      //     }),
      //     ...this.state.values.slice(index + 1),
      //   ],
      // });
    }

    //}
  }
  decreaseval(item) {
    //console.log(">>>>to decrease");
    var x = Number(localStorage.getItem(item.name));
    if (this.state.values) {
      var index = this.state.values.findIndex((z) => z.id === item._id);
      console.log(">>>>", index);
      if (index === -1) {
        // handle error
      } else {
        this.setState({
          values: [
            ...this.state.values.slice(0, index),
            Object.assign({}, this.state.values[index], {
              id: item._id,
              count: x - 1 < 1 ? 1 : x - 1,
              name: item.name,
              price: item.price,
            }),
            ...this.state.values.slice(index + 1),
          ],
        });
      }
      var temp = x - 1 < 1 ? 1 : x - 1;
      localStorage.setItem(item.name, Number(temp));
    }
  }
  deleteitem(item) {
    // var delitem = Number(localStorage.getItem(item.name));
    // var delprice = Number(item.price);
    // var delvalue = delitem * delprice;
    // console.log(">>>>del value>>>", delvalue);
    // var currtotal = Number(Number(localStorage.getItem("total")) - delvalue);
    // console.log(">>>>>>del count", delitem);
    // localStorage.setItem("total", currtotal);

    localStorage.removeItem(item.name);

    axios.get(`${durl}${item._id}`).then((response) => {
      //console.log("deleted");
    });

    var temp1 = this.state.values.filter((temp) => {
      return temp.id !== item._id;
    });
    var temp2 = this.state.cartitems.filter((temp) => {
      return temp._id !== item._id;
    });
    //console.log(">>>> in delete", temp1, temp2);
    this.setState({
      cartitems: temp2,
      values: temp1,
    });
  }
  fillitems() {
    if (this.state.cartitems) {
      return this.state.cartitems.map((item) => {
        var x = localStorage.getItem(item.name);
        return (
          <div className="ctile">
            <div className="cname">{item.name}</div>
            <div className="cprice">{item.price}</div>
            <div className="cright">
              <button className="minus" onClick={() => this.decreaseval(item)}>
                -
              </button>
              <div className="count">{x ? x : 1}</div>
              <button className="plus" onClick={() => this.increaseval(item)}>
                +
              </button>
              <button className="delete" onClick={() => this.deleteitem(item)}>
                delete
              </button>
            </div>
          </div>
        );
      });
    }
  }
  clacTotal() {
    var total = 0;
    if (this.state.cartitems) {
      // var carts = this.state.cartitems;
      //console.log(carts);
      // for (var i = 0; i < carts.length; i++) {
      //   total = Number(total + Number(carts[i].price));
      // }
      var valueitems = this.state.values;
      if (valueitems) {
        for (var i = 0; i < valueitems.length; i++) {
          total = total + Number(valueitems[i].count * valueitems[i].price);
        }
      }
    }
    localStorage.setItem("total", total);

    return total ? total : 0;
    // var q = localStorage.getItem("total");
    // if (q && q !== total) {
    //   localStorage.setItem("total", total);
    //   return total;
    // } else if (q && q === total) {
    //   return q;
    // } else if (q == null && total === 0) {
    //   localStorage.setItem("total", 0);
    //   return 0;
    // }
  }

  render() {
    return (
      <React.Fragment>
        {this.fillitems()}
        <div className="bottom_bar">
          {this.clacTotal() === 0 ? (
            ""
          ) : (
            <Link to="/placeorder">
              <button className="orders">order now</button>
            </Link>
          )}

          <div className="total">Total = {this.clacTotal()}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default Cart;
