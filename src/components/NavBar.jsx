import { Link } from "react-router-dom";
import "../styles/navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <img src="./amazon-logo-png.webp" alt="" />
      <div>
        <p>
          <Link to={"/"}>home</Link>
        </p>
        <p>our products</p>
        <p>
          <Link to={"/login"}>login</Link>
        </p>
        <p>
          <Link to={"/register"}>register</Link>
        </p>
        <p>logout</p>
        <p>cart</p>
        <p>my orders</p>
      </div>
    </div>
  );
}

export default NavBar;
