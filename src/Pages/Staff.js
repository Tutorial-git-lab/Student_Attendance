import React from "react";
import StudentLogin from "./StudentLogin";
import StaffLogin from "./StaffLogin";

export default function Staff() {
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
            <h5 className="bg-success">Staff Report-0</h5>
          </div>
        </div>
      </div>
    </>
  );
}
