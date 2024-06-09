import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function MarksUploadSem3() {
    const navigate = useNavigate();
    return (
        <div className="HomepageBody">
            <div className="sem1_title">Semester-3</div>
            <div className="Marks_upload_container">
                <div className="marks_upload_title1">
                    Your Semester-3 Marks
                </div>
                <div className="subject_names">
                    Subject 1 marks : <input className="marks_input_login" type="number" id='subj1' name='Subject 1' /><br />
                    Subject 2 marks : <input className="marks_input_login" type="number" id='subj2' name='Subject 2' /><br />
                    Subject 3 marks : <input className="marks_input_login" type="number" id='subj3' name='Subject 3' /><br />
                    Subject 4 marks : <input className="marks_input_login" type="number" id='subj4' name='Subject 4' /><br />
                    Subject 5 marks : <input className="marks_input_login" type="number" id='subj5' name='Subject 5' /><br />
                    Subject 6 marks : <input className="marks_input_login" type="number" id='subj6' name='Subject 6' /><br />
                    Subject 7 marks : <input className="marks_input_login" type="number" id='subj7' name='Subject 7' /><br />
                    Subject 8 marks : <input className="marks_input_login" type="number" id='subj8' name='Subject 8' /><br />
                    Subject 9 marks : <input className="marks_input_login" type="number" id='subj9' name='Subject 9' /><br />
                </div>
                <button className="save_button">Save</button><br />
            </div>
            <div className="message_for_the_day">
                <span onClick={() => navigate("/messagefortheday")}>
                    Message for the day
                </span>
            </div>
        </div>
    );
}