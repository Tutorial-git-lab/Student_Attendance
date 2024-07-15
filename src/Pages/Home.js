import "./Home.css";
import React from "react";
import StudentLogin from "./StudentLogin";
import StaffLogin from "./StaffLogin";
export const Home = () => {
  return (
    <>
      <div className="container-fluid my-3 border">
        <div className="row">
          <div className=" col-4 d-flex-col">
            <div className="container row">
              <StudentLogin />
            </div>
            <div className="container my-2 row">
              <StaffLogin />
            </div>
          </div>
          <div className="col-8 flex-col">
            <img src="img/ph.jpg" alt="" width={700} height={350} />
          </div>
        </div>
      </div>
    </>
  );
};
