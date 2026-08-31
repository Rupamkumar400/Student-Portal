import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import "./StaffLayout.css";

const StaffLayout = () => {
  return (
    <div className="staff-layout">

      <Sidebar />

      <main className="staff-main">
        <Outlet />
      </main>

    </div>
  );
};

export default StaffLayout;