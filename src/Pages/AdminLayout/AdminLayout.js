import { Outlet } from "react-router-dom";
import { useState } from "react";

import AddDivision from "./AddDivision";

import AddStandard from "./AddStandard";
import AdminComplain from "./AdminComplain";
import AdminFeedback from "./AdminFeedback";
import AdminMenu from "./AdminMenu";
import StaffReport from "./StaffReport";
import StudentReport from "./StudentReport";
import AdminLeave from "./AdminLeave";
import AddStaff from "./AddStaff";
import LogOut1 from "../LogOut1";

const AdminLayout = () => {
  const [activeKey, setActiveKey] = useState("addStandard");

  const renderComponent = () => {
    switch (activeKey) {
      case "addDivision":
        return <AddDivision />;
      case "addStandard":
        return <AddStandard />;
      case "adminComplain":
        return <AdminComplain />;
      case "adminFeedback":
        return <AdminFeedback />;
      case "adminMenu":
        return <AdminMenu />;
      case "staffReport":
        return <StaffReport />;
      case "studentReport":
        return <StudentReport />;
      case "adminLeave":
        return <AdminLeave />;
      case "addStaff":
        return <AddStaff />;
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
                    <h5 className="me-5">Welcome Admin</h5>
                  </div>

                  <div className=" my-2 p-0 me-3">
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "adminMenu" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("adminMenu")}>
                        Admin Menu
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2 border ${
                        activeKey === "addStandard" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("addStandard")}>
                        Add Standard
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "addDivision" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("addDivision")}>
                        Add Divisions
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "addStaff" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("addStaff")}>
                        Add Staff
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "staffReport" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("staffReport")}>
                        Staff Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "adminComplain" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("adminComplain")}>
                        Complain
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "adminLeave" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("adminLeave")}>
                        Leave
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "studentReport" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("studentReport")}>
                        Student Reports
                      </a>
                    </div>
                    <div
                      className={`text-center ms-3 me-5 my-2  border ${
                        activeKey === "adminFeedback" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("adminFeedback")}>
                        Feed Back
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

export default AdminLayout;
