import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function FirstsemInfo() {

  const navigateWithDelay_seca = () => {
    setTimeout(() => {
      navigate("/timetablesem1/a_sec");
    }, 100);
  };

  const navigateWithDelay_secb = () => {
    setTimeout(() => {
      navigate("/timetablesem1/b_sec");
    }, 100);
  };

  const navigateWithDelay_secc = () => {
    setTimeout(() => {
      navigate("/timetablesem1/c_sec");
    }, 100);
  };

  const navigateWithDelay_assn = () => {
    setTimeout(() => {
      navigate("/assignments/mqp_sem1");
    }, 100);
  };

  const navigateWithDelay_mqp = () => {
    setTimeout(() => {
      navigate("/assignments/mqp_sem1");
    }, 100);
  };

  const navigate = useNavigate();
  return (
    <div className="HomepageBody">
      <div className="sem1_title">Semester-1</div>
      <div className="timetable_container">
        <div className="title2">
          Time Table
        </div>
        <div className="timetable_button">
          <button onClick={() => {  navigateWithDelay_seca(); }} className="timetable_button1">
            A Section
          </button>
          <button onClick={() => { navigateWithDelay_secb(); }} className="timetable_button1">
            B Section
          </button>
          <button onClick={() => { navigateWithDelay_secc(); }} className="timetable_button1">
            C Section
          </button>
        </div>
      </div>
      <div className="question_paper_container">
        <div className="qp_title">
          Question Papers
        </div>
        <button onClick={() => {  navigateWithDelay_assn(); }} className="assn_btn">
          Assignments
        </button>
        <button onClick={() => {  navigateWithDelay_mqp(); }} className="qp_btn">
          MQP
        </button>
      </div>
      <div className="recent_news_container">
        <div className="recent_title">
          Recent News
        </div>
        <marquee className="marq" behavior="scroll" direction="left">Recent News 1</marquee>
        <marquee className="marq" behavior="scroll" direction="left">Recent News 2</marquee>
        <marquee className="marq" behavior="scroll" direction="left">Recent News 3</marquee>
      </div>
      <div className="oppurtunities_container">
        <div className="oppur_title">
          Oppurtunities
        </div>
        <div className="oppur_name">
          <li className="oppur_name1" onClick={() => navigate("/hackathon_details")}>Hackathons</li>
          <li className="oppur_name2" onClick={() => navigate("/workshop_details")}>Workshops</li>
        </div>
      </div>
    </div >
  );
}