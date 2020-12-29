import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const btnText = e.target.textContent;
    const btnPos = e.target.getBoundingClientRect();
    const btnCenter = (btnPos.left + btnPos.right) / 2;
    const btnBottom = btnPos.bottom - 3;
    openSubmenu(btnText, { btnCenter, btnBottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <h2>NavBar</h2>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn" onMouseOver={displaySubmenu}>
            processes
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            information
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            about
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
