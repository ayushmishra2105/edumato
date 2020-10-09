import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "firebase/auth";
import "./App.css";
import Nav from "./nav/Nav";
import Home from "./home/home";
import Login from "./login/login";
import Cart from "./cart/cart";
import RestaurentDetails from "./resturantdetails/restaurantdetails";
import Form from "./orders/from";
import { UserContext } from "./providers/userprovider";
import ListingApi from "./restaurantlisting/listingapi";
import Order from "./orders/orderApi";

function App() {
  const user = useContext(UserContext);
  //console.log(">>>>>>>>>app", user);
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/rest/:id" component={RestaurentDetails}></Route>
      <Route exact path="/list/:id" component={ListingApi}></Route>

      <Route
        exact
        path="/cart"
        component={() => <Cart useremail={user ? user.email : ""} />}
      ></Route>
      <Route exact path="/placeorder" component={Form}></Route>
      <Route exact path="/vieworder" component={Order}></Route>
    </BrowserRouter>
  );
}

export default App;
