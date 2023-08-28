import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/js/src/collapse.js";


const Navbar = (props) => {
  const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
  props.isLoggedin(isAuthenticated);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Excercise Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create Exercise Log
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                Create User
              </Link>
            </li>
            {
              !isAuthenticated ? (
              <li >
              <button className="btn btn-dark" onClick={() => loginWithRedirect()}>Log In</button>
              </li> ) : (
              <li>
              <button className="btn btn-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
              </li> )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;