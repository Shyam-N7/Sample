import "./index.css";
import { useNavigate } from "react-router-dom";

export default function HackathonInfo() {
  const navigate = useNavigate();
  return (
    <div className="HomepageBody">
      <div className="title02">
      <marquee behavior="normal" direction="left">
          Hackathon Details Here
        </marquee>
      </div>
    </div>
  );
}