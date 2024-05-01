import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";

// In './Components/Signin.js'
export const Login = () => {
  return (
    <div className="addUser">
      <h3>Login</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />

          <label htmlFor="name">Password:</label>
          <input
            type="text"
            id="password"
            autoComplete="off"
            placeholder="Enter Password"
          />

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
      </form>

      <div className="login">
        <p>Don't have an Account ?</p>
        <Link to="/" type="Submit" class="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
