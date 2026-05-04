import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">My Store</h1>

      <div className="flex gap-4">
        <Link to="/">Items</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={logout} className="text-red-500">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;