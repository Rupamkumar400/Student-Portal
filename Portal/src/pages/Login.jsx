import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(email === "admin@sms.com" && uniqueId === "admin123"){
      Navigate("/admin")
      return;
    }

    if(email.endsWith(".com")){
      Navigate("/Student")
    } 
  };



  
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Student Portal</h1>
          <p>Login to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Unique ID</label>
            <input
              type="text"
              placeholder="Enter your unique ID"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <span>Contact Admin</span>
        </p>
      </div>
    </div>
  );
}

export default Login;