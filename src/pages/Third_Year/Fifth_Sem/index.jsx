import "./index.css";
import { useNavigate } from "react-router-dom";

export default function FifthsemInfo() {
  const navigate = useNavigate();
  return (
    <div className="HomepageBody">
      <div className="sem1_title">Semester-5</div>
      <div className="timetable_container">
        <div className="title2">
          Time Table
        </div>
        <div className="timetable_button">
          <button onClick={() => navigate(`/timetablesem5/a_sec`)} className="timetable_button1">
            A Section
          </button>
          <button onClick={() => navigate(`/timetablesem5/b_sec`)} className="timetable_button1">
            B Section
          </button>
          <button onClick={() => navigate(`/timetablesem5/c_sec`)} className="timetable_button1">
            C Section
          </button>
        </div>
      </div>
      <div className="question_paper_container">
        <div className="qp_title">
          Question Papers
        </div>
        <button onClick={() => navigate(`/assignments/mqp_sem5`)} className="qp_btn">
          Assignments
        </button>
        <button onClick={() => navigate(`/assignments/mqp_sem5`)} className="qp_btn">
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