import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          <NavLink
            exact
            to="/"
            activeClassName="active" 
            className="navbar-link" 
          >
            Home
          </NavLink>
          <NavLink
            to="/list"
            activeClassName="active" 
            className="navbar-link" 
          >
            List
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            className="navbar-link" 
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
