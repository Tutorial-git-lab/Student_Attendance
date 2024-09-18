import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container justify-content-center align-item-center">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="standard">
                  <strong>Standard</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="staff">
                  <strong>Staff</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="feedback">
                  <strong>FeedBack</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  <strong>Contact Us</strong>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="admin">
                  <strong>Login</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  <strong>Register</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
