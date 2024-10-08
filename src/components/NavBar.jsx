import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useContext } from "react";
import { existUserContext } from "../context/UserContext";
function NavBar() {
  const mylocation=useLocation()
  const location=mylocation.pathname

  const { existUser } = useContext(existUserContext);
  return (
    <div className="navbar">
      <img src="/amazon-logo-png.webp" alt="" />
      <div>
        <p className={location=="/"?"active":null}>
          <Link to={"/"}>home</Link>
        </p>
        <p  className={location=="/products"?"active":null}><Link to={"/products"}>our products</Link></p>
        {existUser ? (
          <>
            <p>cart</p>
            <p>my orders</p>
            <p style={{color:"blue"}}>logout</p>
          </>
        ) : (
          <>
            <p>
              <Link to={"/login"}>login</Link>
            </p>
            <p>
              <Link to={"/register"}>register</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
