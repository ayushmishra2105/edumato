import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import { UserContext } from "../providers/userprovider";
import Navuser from "./navuser";
var usercount = 1;

function Nav() {
  const user = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="navbar-logo-holder">
        <Link to="/">
          <div className="navlogo">e!</div>
        </Link>
      </div>
      <div className="navbar-right">
        {user ? (
          <Navuser />
        ) : usercount === 1 ? (
          (usercount = 2)
        ) : (
          <div>
            <Link to="/login" className="navbar-login-holder">
              Login
            </Link>
            <Link to="/login" className="navbar-create-account-holder">
              Create an Account
            </Link>
          </div>
        )}
        {}
        {/* {console.log("in the nav")}
        {console.log(auth.currentUser)} */}
      </div>
    </div>
  );
}

export default Nav;
