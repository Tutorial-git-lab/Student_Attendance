import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Layout/Home";
import Layout from "./Pages/Layout/Layout";
import Standard from "./Pages/Layout/Standard";
import Staff from "./Pages/Layout/Staff";
import FeedBack from "./Pages/Layout/FeedBack";
import { Contact } from "./Pages/Layout/Contact";
import Admin from "./Pages/Layout/Admin";
import Header from "./Pages/Layout/Header";
import Register from "./Pages/Layout/Register";
import AdminLayout from "./Pages/AdminLayout/AdminLayout";
import AddDivision from "./Pages/AdminLayout/AddDivision";
import AddStaff from "./Pages/AdminLayout/AddStaff";
import AddStandard from "./Pages/AdminLayout/AddStandard";
import AdminFeedback from "./Pages/AdminLayout/AdminFeedback";
import AdminMenu from "./Pages/AdminLayout/AdminMenu";
import StaffReport from "./Pages/AdminLayout/StaffReport";
import StudentReport from "./Pages/AdminLayout/StudentReport";
import StaffLayout from "./Pages/StaffLayout/StaffLayout";
import StaffHome from "./Pages/StaffLayout/StaffHome";
import AddStudent from "./Pages/StaffLayout/AddStudent";
import AdvanceReport from "./Pages/StaffLayout/AdvanceReport";
import AdvanceAttReport from "./Pages/StaffLayout/AdvanceAttReport";
import Attendance from "./Pages/StaffLayout/Attendance";
import AttendanceReport from "./Pages/StaffLayout/AttendanceReport";
import StaffChangePassword from "./Pages/StaffLayout/StaffChangePassword";
import StaffComplain from "./Pages/StaffLayout/StaffComplain";
import StudentLayout from "./Pages/StudentLayout/StudentLayout";
import MyProfile from "./Pages/StudentLayout/MyProfile";
import StudentAttReport from "./Pages/StudentLayout/StudentAttReport";
import StudentComplain from "./Pages/StudentLayout/StudentComplain";
import StudentHome from "./Pages/StudentLayout/StudentHome";
import StudentLeave from "./Pages/StudentLayout/StudentLeave";
import StudentPassword from "./Pages/StudentLayout/StudentPassword";
import AdminLeave from "./Pages/AdminLayout/AdminLeave";
import LogOut1 from "./Pages/LogOut1";
import StaffLeave from "./Pages/StaffLayout/StaffLeave";
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
                <Route exact path="register" element={<Register />} />
              </Route>
              <Route exact path="/adminLayout" element={<AdminLayout />}>
                <Route exact path="addDivision" element={<AddDivision />} />
                <Route exact path="addStaff" element={<AddStaff />} />
                <Route exact path="addStandard" element={<AddStandard />} />
                <Route exact path="adminFeedback" element={<AdminFeedback />} />
                <Route exact path="adminMenu" element={<AdminMenu />} />
                <Route exact path="staffReport" element={<StaffReport />} />
                <Route exact path="studentReport" element={<StudentReport />} />
                <Route exact path="adminLeave" element={<AdminLeave />} />
              </Route>
              <Route exact path="/staffLayout" element={<StaffLayout />}>
                <Route exact path="staffHome" element={<StaffHome />} />
                <Route exact path="addStudent" element={<AddStudent />} />
                <Route exact path="advanceReport" element={<AdvanceReport />} />
                <Route
                  exact
                  path="advanceAttReport"
                  element={<AdvanceAttReport />}
                />
                <Route exact path="attendance" element={<Attendance />} />
                <Route
                  exact
                  path="attendanceReport"
                  element={<AttendanceReport />}
                />
                <Route exact path="studentReport" element={<StudentReport />} />
                <Route
                  exact
                  path="studentChangePassword"
                  element={<StaffChangePassword />}
                />
                <Route exact path="staffComplain" element={<StaffComplain />} />
                <Route exact path="staffleave" element={<StaffLeave />} />
              </Route>

              <Route exact path="/studentLayout" element={<StudentLayout />}>
                <Route exact path="addDivision" element={<MyProfile />} />
                <Route exact path="addStaff" element={<StudentAttReport />} />
                <Route exact path="addStandard" element={<StudentComplain />} />
                <Route exact path="adminFeedback" element={<StudentHome />} />
                <Route exact path="adminMenu" element={<StudentLeave />} />
                <Route exact path="staffReport" element={<StudentPassword />} />
                <Route exact path="studentReport" element={<StudentReport />} />
              </Route>

              <Route exact path="logOut" element={<LogOut1 />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
