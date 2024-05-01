import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

// In './Components/Signin.js'
export const Signup = () => {
  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="name">Password:</label>
          <input
            type="text"
            id="password"
            autoComplete="off"
            placeholder="Enter Password"
          />

          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>

      <div className="login">
        <p>Already have an account ?</p>
        <Link to="/login" type="Submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
