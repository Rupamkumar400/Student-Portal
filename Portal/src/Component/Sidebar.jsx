import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Islogin");
    localStorage.removeItem("currentUser");

    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>🎓 EduPortal</h2>
        <p>Staff Panel</p>
      </div>

      <nav className="sidebar-menu">

        <NavLink
          to="/staff/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/staff/students"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          👨‍🎓 My Students
        </NavLink>

        <NavLink
          to="/staff/attendance"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          📅 Attendance
        </NavLink>

        <NavLink
          to="/staff/marks"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          📝 Marks
        </NavLink>

        <NavLink
          to="/staff/subjects"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          📚 Subjects
        </NavLink>

        <NavLink
          to="/staff/notices"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          📢 Notices
        </NavLink>

        <NavLink
          to="/staff/profile"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          👤 Profile
        </NavLink>

      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        🚪 Logout
      </button>

    </aside>
  );
};

export default Sidebar;