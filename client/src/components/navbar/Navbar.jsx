import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Travel Agency</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link to="/register" className="navButton">
              <span className="logo">Register</span>
            </Link>
            <Link to="/login" className="navButton">
              <span className="logo">Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>




  );
};

export default Navbar;
