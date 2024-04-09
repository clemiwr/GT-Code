import "../style/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("house");
  const [isOpen, setIsOpen] = useState(true);
  const [isTextVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setTextVisible(true);
      }, 300);
    } else {
      setTextVisible(false);
    }
  }, [isOpen]);

  var house = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentcolor"
      class="bi bi-house-fill"
      viewBox="0 0 16 16">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
    </svg>
  );
  var mouse = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      class="bi bi-mouse"
      viewBox="0 0 16 16">
      <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
    </svg>
  );
  var controller = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      class="bi bi-controller"
      viewBox="0 0 16 16">
      <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
      <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
    </svg>
  );
  const rotate = {
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease-in-out",
  };
  var hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#e6e8db"
      class="bi bi-list"
      viewBox="0 0 16 16"
      style={rotate}
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );

  return (
    
    <Navbar
      expanded={isOpen}
      className={`sidebar align-items-start ${isOpen ? "sidebar-expanded" : "sidebar-unexpanded"
        }`}>
      <Container>
      
        <Nav className="d-flex flex-column ">
          <NavLink
            className="nav-icon my-2"
            onClick={() => setIsOpen(!isOpen)}>
            {hamburger}
          </NavLink>
          
          <NavLink to="/"
            className="nav-icon my-2"
            href=""
            active={activeLink === "house"}
            onClick={() => setActiveLink("house")}
            style={
              activeLink === "house"
                ? { color: "#45B8C9" }
                : { color: "#e6e8db" }
            }>
              
              {house}
              {isTextVisible && <span className="sidebar-text">Home</span>}
            
          </NavLink>
          
          <NavLink to="/DPI-Converter"
            className="nav-icon my-2"
            href=""
            active={activeLink === "mouse"}
            onClick={() => setActiveLink("mouse")}
            style={
              activeLink === "mouse"
                ? { color: "#45B8C9" }
                : { color: "#e6e8db" }
            }>
            
              {mouse}
              {isTextVisible && (
                <span className="sidebar-text">Dpi-Converter</span>
              )}
           
          </NavLink>
          
          <NavLink to="/Controller-Tool"
            className="nav-icon my-2"
            href=""
            active={activeLink === "controller"}
            onClick={() => setActiveLink("controller")}
            style={
              activeLink === "controller"
                ? { color: "#45B8C9" }
                : { color: "#e6e8db" }
            }>
            
              {controller}
              {isTextVisible && (
                <span className="sidebar-text">Controller Tool</span>
              )}
           
          </NavLink>
          
        </Nav>
      </Container>
    </Navbar>

              
    
  );
}

export default Sidebar;
