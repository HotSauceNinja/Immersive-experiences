import { Link } from "react-router-dom";
import logo from "../assets/images/logo_magicstudio.jpg";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        width: "100vw",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Link to="/">
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <img
            src={logo}
            alt="immersive experiences logo"
            style={{ width: "200px" }}
          />
          <h1>Immersive Experiences</h1>
        </div>
      </Link>

      <div className="links">
        <Link
          className="nav-link"
          style={{ marginRight: "20px" }}
          to="/experiences"
        >
          All Experiences
        </Link>
        <Link className="nav-link" style={{ marginRight: "20px" }} to="/create">
          Add Experience
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
