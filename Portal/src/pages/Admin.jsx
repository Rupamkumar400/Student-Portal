import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate()
  
  const hendleLogout = ()=>{
    navigate ("./Login")
  }
  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={hendleLogout}>LogOut</button>
    </div>
  );
}

export default Admin;