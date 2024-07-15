import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="container justify-content-center align-item-center my-3 w-50">
        <form className=" container border-primary w-50 vh-50 my-3 border">
          <div className="text-center my-3">
            <h5 className="text-primary">Admin Login Panel</h5>
          </div>
          <div class="mb-3 text-center my-3">
            <input
              type="text"
              class="col-8"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter user name"
            />
          </div>
          <div class="mb-3 text-center my-2">
            <input
              type="password"
              class="col-8"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-primary mb-2 w-50">
              Login
            </button>
          </div>
          <div className="text-center">
            <a href="/">Back to Home</a>
          </div>
        </form>
      </div>
    </>
  );
}
