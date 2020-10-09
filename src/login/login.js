import React, { Component } from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";
import { auth } from "../firebase/firebase.utils";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ currentUser: user });
        this.props.history.push("/");
      } else {
        this.setState({ currentUser: null });
      }
    });
    //console.log("changed");
  }

  componentWillUnmount() {}

  render() {
    return (
      <div class="dialog">
        <h2 mat-dialog-title>First Time Here?</h2>
        <mat-dialog-content>
          <div class="google-login" onClick={signInWithGoogle}>
            <div>
              <svg viewBox="0 0 512 512">
                <path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3" />
              </svg>
            </div>
            <div>Continue With Google</div>
          </div>
        </mat-dialog-content>
      </div>
    );
  }
}

export default Login;
