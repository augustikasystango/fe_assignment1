import { NavLink } from "react-router-dom";
import routes from "../routes/route";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
