import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import title from '../Design/Charaiveti-logos_white.png';
import logo from '../logo/dbitlogo.png'

export default function Homepage() {
const navigate = useNavigate();
  return (
    <div className="HomepageBody">
      <div className="title">
        <img src={title} alt="" className="title-logo" />
        <img src={logo} alt="" className="dbit-logo" />      </div>
      <div className="Buttons_home">
        <button onClick={() => navigate("/admin_register")} className="home_button">
          Mentor
        </button>
        <button onClick={() => navigate("/register")} className="home_button">
          Student
        </button>
        <button onClick={() => navigate("/admin_register")} className="home_button_admin">
          Admin
        </button>
      </div>
    </div>
  );
}
