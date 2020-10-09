import React from "react";
import { Link } from "react-router-dom";
import "./navuser.css";
import { auth } from "../firebase/firebase.utils";

const Navuser = () => {
  const handlelogout = () => {
    auth
      .signOut()
      .then(function () {
        //console.log("signed out");
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  return (
    <React.Fragment>
      <Link to="/vieworder" className="order">
        My Orders
      </Link>
      <Link to="/cart" className="cart">
        cart
      </Link>
      <Link to="" className="signout" onClick={handlelogout}>
        Signout
      </Link>
    </React.Fragment>
  );
};
export default Navuser;
