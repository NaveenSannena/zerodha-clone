
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
const Menu = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="react" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Orders</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/holdings"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Holdings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/positions"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Positions</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/funds"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Funds</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Apps</p>
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;