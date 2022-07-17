import { NavLink } from "react-router-dom";

function Menu() {
  const newLocal = "background-color: #e3f2fd;";
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/add-book">Add Book</NavLink>
        </div>
      </nav>
    </div>
  );
}

function BaseLayout(props) {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  );
}
export default BaseLayout;
