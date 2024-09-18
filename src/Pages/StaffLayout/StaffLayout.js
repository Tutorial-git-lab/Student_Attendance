import { Outlet } from "react-router-dom";
import { useState } from "react";
import StudentReport from "./StudentReport";
import LogOut1 from "../LogOut1";
import AddStudent from "./AddStudent";
import AdvanceAttReport from "./AdvanceAttReport";
import AdvanceReport from "./AdvanceReport";
import Attendance from "./Attendance";
import AttendanceReport from "./AttendanceReport";
import StaffChangePassword from "./StaffChangePassword";
import StaffComplain from "./StaffComplain";
import StaffHome from "./StaffHome";

const StaffLayout = () => {
  const [activeKey, setActiveKey] = useState("staffHome");

  const renderComponent = () => {
    switch (activeKey) {
      case "addStudent":
        return <AddStudent />;
      case "advanceAttReport":
        return <AdvanceAttReport />;
      case "advanceReport":
        return <AdvanceReport />;
      case "attendance":
        return <Attendance />;
      case "attendanceReport":
        return <AttendanceReport />;
      case "staffChangePassword":
        return <StaffChangePassword />;
      case "staffComplain":
        return <StaffComplain />;
      case "staffHome":
        return <StaffHome />;
      case "studentReport":
        return <StudentReport />;
      case "/":
        return <LogOut1 />;
    }
  };

  return (
    <>
      <div>
        <div className="container-fluid p-3 border">
          <div className="row">
            <div className="container-fluid align-item-center justify-content-center w-80 vh-80 border">
              <div className="row">
                <div className="col-3 d-flex-col bg-white align-item-left justify-content-left border my-1">
                  <div className="text-center my-1">
                    <h5 className="me-5">Welcome Staff</h5>
                  </div>

                  <div className=" my-2 p-0 me-3">
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "staffHome" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("staffHome")}>
                        Home
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "AddStudent" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("AddStudent")}>
                        Add Student
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "studentReport" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("studentReport")}>
                        Student Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "attendance" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("attendance")}>
                        Attendance
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "attendanceReport"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("attendanceReport")}
                      >
                        Attendanve Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "advanceReport" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("advanceReport")}>
                        Advance Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "advanceAttReport"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("advanceAttReport")}
                      >
                        Advance ATT Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "staffComplain" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("staffComplain")}>
                        Complain
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "staffLeave" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("staffLeave")}>
                        Leave
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "staffChangePassword"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("staffChangePassword")}
                      >
                        Chande Password
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "logout" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("logout")}>
                        Log Out
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-8 d-flex-col ">{renderComponent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default StaffLayout;
