import React from "react";
import "./Navigation.css";
import "tachyons";
import Logo from "../Logo/Logo";
// import SignIn from "../SignIn/SignIn";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <Logo />
        <p
          className="f3 link dim pa3 pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <Logo />
        <div className="tags">
          <p
            className="f3 link dim pa3 pointer"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
          <p
            className="f3 link dim pa3 pointer"
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
