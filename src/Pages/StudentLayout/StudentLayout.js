import { Outlet } from "react-router-dom";
import { useState } from "react";
import StudentHome from "./StudentHome";
import MyProfile from "./MyProfile";
import StudentAttReport from "./StudentAttReport";
import StudentComplain from "./StudentComplain";
import StudentLeave from "./StudentLeave";
import StudentPassword from "./StudentPassword";
import LogOut1 from "../LogOut1";

const StaffLayout = () => {
  const [activeKey, setActiveKey] = useState("studentPassword");

  const renderComponent = () => {
    switch (activeKey) {
      case "myProfile":
        return <MyProfile />;
      case "studentAttReport":
        return <StudentAttReport />;
      case "studentComplain":
        return <StudentComplain />;
      case "studentHome":
        return <StudentHome />;
      case "studentLeave":
        return <StudentLeave />;
      case "studentPassword":
        return <StudentPassword />;
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
                    <h5 className="me-5">Welcome Student</h5>
                  </div>

                  <div className=" my-2 p-0 me-3">
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "StudentHome" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("studentHome")}>
                        Home
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "myProfile" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("myProfile")}>
                        My Profile
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "studentLeave" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("studentLeave")}>
                        Leave
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "studentComplain"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("studentComplain")}
                      >
                        Complain
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "studentAttReport"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("studentAttReport")}
                      >
                        Attendance Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "studentPassword"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("studentPassword")}
                      >
                        Change Password
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "logOut" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("logOut")}>
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
