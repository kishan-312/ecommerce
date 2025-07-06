import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        className="p-3 text-white"
        style={{
          height: "70px",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "111",
          width: "100%",
          backgroundColor: "#000",
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to={"/"}
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-lg-auto"
            >
              <span className=" fs-3 fw-bold">KISMICODE</span>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `nav-link px-2 text-white${isActive ? " fw-bold" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `nav-link px-2 text-white${isActive ? " fw-bold" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `nav-link px-2 text-white${isActive ? " fw-bold" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
