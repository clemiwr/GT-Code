import "../style/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { House, Mouse, Controller } from "./Icons";


function Sidebar(props) {
  
  const [isTextVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (props.isOpen) {
      setTimeout(() => {
        setTextVisible(true);
      }, 300);
    } else {
      setTextVisible(false);
    }
  }, [props.isOpen]);

  const rotate = {
    transform: props.isOpen ? "rotate(0deg)" : "rotate(90deg)",
    transition: "transform 0.3s ease-in-out",
  };
  const handleHamburgerClick = (event) => {
    event.preventDefault();
    props.setIsOpen(!props.isOpen);
  };
  var hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#e6e8db"
      className="bi bi-list"
      viewBox="0 0 16 16"
      style={rotate}
      onClick={handleHamburgerClick}
    >
      <path
        fillRule="evenodd"
        d="M1 2.5A.5.5 0 0 1 1.5 2h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 1.5 7h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 1.5 12h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );

  var location = useLocation();

  return (

    < Navbar
      expanded={props.isOpen}
      className={`sidebar align-items-start ${props.isOpen ? "sidebar-expanded" : "sidebar-unexpanded"
        }`
      }>
      <Container>

        <Nav className="d-flex flex-column ">
          <NavLink
            className="nav-icon my-2"
            onClick={() => props.setIsOpen(!isOpen)}>
            {hamburger}
          </NavLink>

          <NavLink to="/"
            className="nav-icon my-2"
            style={
              location.pathname === "/"
                ? { color: "#45B8C9" }
                : { color: "#e6e8db" }
            }>

            <House />
            {isTextVisible && <span className="sidebar-text">Home</span>}

          </NavLink>

          <NavLink to="/DPI-Converter"
            className="nav-icon my-2"
            style={
              location.pathname === "/DPI-Converter"
                ? { color: "#45B8C9" }
                : { color: "#e6e8db" }
            }>

            <Mouse />
            {isTextVisible && (
              <span className="sidebar-text">Dpi-Converter</span>
            )}

          </NavLink>

          <NavLink to="/Controller-Tool"
            className="nav-icon my-2"
            style={
              location.pathname === "/Controller-Tool"
                ? { color: "#45B8C9" }
                : { color: "#e6e8db" }
            }>

            <Controller />
            {isTextVisible && (
              <span className="sidebar-text">Controller Tool</span>
            )}

          </NavLink>

        </Nav>
      </Container>
    </Navbar >



  );
}

export default Sidebar;
