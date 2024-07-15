import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import Layout from "./Pages/Layout";
import Standard from "./Pages/Standard";
import Staff from "./Pages/Staff";
import FeedBack from "./Pages/FeedBack";
import { Contact } from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Header from "./Pages/Header";
import StudentLogin from "./Pages/StudentLogin";
import StaffLogin from "./Pages/StaffLogin";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <div className="container-fluid border">
            <div className="row">
              <div className="col-6 d-flex col border">
                <Header />
              </div>
            </div>
          </div>
          <div className=" col-12 d-flex-col border">
            <Routes>
              <Route exact path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route exact path="standard" element={<Standard />} />
                <Route exact path="staff" element={<Staff />} />
                <Route exact path="feedback" element={<FeedBack />} />
                <Route exact path="contact" element={<Contact />} />
                <Route exact path="admin" element={<Admin />} />
              </Route>
              <Route
                exact
                path="studentLogin"
                element={<StudentLogin />}
              ></Route>
              <Route exact path="staffLogin" element={<StaffLogin />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
