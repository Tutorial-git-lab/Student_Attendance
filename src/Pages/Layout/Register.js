import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container justify-content-center align-item-center my-3 w-50">
        <form className=" container border-primary w-50 vh-50 my-3 border">
          <div className="text-center my-3">
            <h5 className="text-primary">Register</h5>
          </div>
          <div class="mb-3 text-center my-3">
            <label className="form-lable text-end col-4">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              class="col-8"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter user name"
            />
          </div>
          <div class="mb-3 text-center my-3">
            <label className="form-lable text-end col-4">
              <strong>Email:</strong>
            </label>
            <input
              type="text"
              class="col-8"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="mb-3 text-center my-2">
            <label className="form-lable text-end col-4">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              class="col-8"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-3 text-center my-3">
            <label className="form-lable text-end col-4">
              <strong>Mobile:</strong>
            </label>
            <input
              type="text"
              class="col-8"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter mobile number"
            />
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-primary mb-2 w-50 ms-2">
              Submit
            </button>
          </div>
          <div className="row">
            <div className="text-center col-6 mb-2">
              <Link to="/">Back to home</Link>
            </div>
            <div className="text-center col-6 mb-2">
              <Link to="/Admin">Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
