import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Admin from "./pages/Admin";
import Hod from './pages/Hod'
import Staff from './pages/Staff/Staff'
import Student from "./pages/Student/Student"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
        <Route
        path="/hod"
        element={<Hod/>}
        />
        <Route
        path="/staff"
        element={<Staff/>}
        />
        <Route 
        path="/student"
        element={<Student />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;