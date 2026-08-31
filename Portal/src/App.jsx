import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import Admin from "./pages/Admin";
import Hod from "./pages/Hod";
import Staff from "./pages/Staff/Staff";
import Student from "./pages/Student/Student";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* HOD */}
        <Route
          path="/hod"
          element={<Hod />}
        />

        {/* Staff */}
        <Route
          path="/staff"
          element={<Staff />}
        />

        {/* Student */}
        <Route
          path="/student"
          element={<Student />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;