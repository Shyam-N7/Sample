import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function ModelandAssnS1() {
    const navigate = useNavigate();
    return (
        <div className="HomepageBody">
            <div className="sem1_title">Semester-8</div>
            <div className="assignments_container">
                <div className="assn_title">
                    Assignments
                </div>
                <div className="assn_name">
                    <li className="assn_name1" onClick={() => navigate("/none")}>Assignment 1</li>
                    <li className="assn_name1" onClick={() => navigate("/none")}>Assignment 2</li>
                    <li className="assn_name1" onClick={() => navigate("/none")}>Assignment 3</li>
                </div>
            </div>
            <div className="marks_upload">
                <div className="marks_upload_title">Upload your marks </div>
                <span onClick={() => navigate("/marksupload/sem8")}>here!</span>
            </div>
            <div className="mqp_container">
                <div className="mqp_title">
                    Model Question Paper's
                </div>
                <div className="mqp_name">
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 1</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 2</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 3</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 4</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 5</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 6</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 7</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 8</li>
                    <li className="mqp_name1" onClick={() => navigate("/none")}>Subject 9</li>
                </div>
            </div>
        </div>
    );
}