import React from 'react';
import { NavLink } from "react-router-dom";
import "../../style/Hohme.css"
import icon from "../../assets/Bild.svg";
import { Mouse, Controller } from "../Icons";
function Hohme() {

  return (
    <div style={{ color: '#e6e8db' }}>
      <h1>Welcome to GameTools</h1>
      <div className='Text-Bild'>
        <p>
          This web app, part of our school project, is a must-have tool for gamers.

          Our DPI Converter lets you seamlessly transfer your in-game sensitivity settings across different games, ensuring consistent performance.


          The Controller Tool quickly checks your controller's functionality, helping you troubleshoot any issues.
        <br/>
          We hope you find our tools useful. Happy gaming!
        </p>
        <img src={icon} alt="Icon" className='icon' />
      </div>
      <h2>
        Test it out
      </h2>
      <NavLink to="/DPI-Converter" className={"HohmeLink"}>
        <Mouse width="40" height="40" /> DPI-Converter
      </NavLink>
      <NavLink to="/Controller-Tool" className={"HohmeLink"}>
        <Controller width="40" height="40" /> Controller-Tool
      </NavLink>
    </div>
  );
}

export default Hohme;