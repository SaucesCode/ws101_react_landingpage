import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function NavBar({ logo }) {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };
  return (
    <div className="header">
      <h1>{logo}</h1>
      <FontAwesomeIcon
        icon={menu ? faXmark : faBars}
        id="menu-icon"
        onClick={handleMenuClick}
      />
      <ul className={`navbar ${menu ? "active" : ""}`}>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/key">Key Points</CustomLink>
        <CustomLink to="/more">More</CustomLink>
        <CustomLink to="/conclusion">Conclusion</CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""} data-nav={children}>
      <Link to={to} {...props} data-nav={children}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
