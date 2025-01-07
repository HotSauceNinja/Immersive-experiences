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
      <a href="/">
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
            style={{ width: "200px", height: "auto" }}
          />
          <h1>Immersive Experiences</h1>
        </div>
      </a>

      <div className="links">
        <a
          className="nav-link"
          style={{ marginRight: "20px" }}
          href="/experiences"
        >
          All Experiences
        </a>
        <a className="nav-link" style={{ marginRight: "20px" }} href="/create">
          Add Experience
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
