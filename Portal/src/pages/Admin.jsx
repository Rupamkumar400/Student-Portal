import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate()
  
  const hendleLogout = ()=>{
    navigate ("./Login")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome Admin! page</p>
      <button onClick={hendleLogout}>LogOut</button>
    </div>
  );
}

export default Admin;