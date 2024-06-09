import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function ModelandAssnS1() {

    // const assignmentAnimation = () => {
    //     const messages = document.querySelectorAll(".assn_name1");
    //     messages.forEach((message) => {
    //       if (message) {
    //         message.style.transform = "scale(1.07)";
    //         message.style.boxShadow = "0 0 8px 8px rgba(0, 0, 0, 0.349)";
    //         message.style.outline = "3px solid #b0c4b186";
      
    //         setTimeout(() => {
    //           message.style.transform = "scale(1)";
    //           message.style.boxShadow = "none";
    //           message.style.outline = "none";
    //         }, 200);
    //       }
    //     });
    //   };

      const navigateWithDelay_assn = () => {
        setTimeout(() => {
          navigate("/assignments_mqp");
        }, 100);
      };

      const uploadAnimation = () => {
        const message = document.querySelector(".marks_upload");
        message.style.transform = "scale(1.07)";
        message.style.boxShadow = "0 0 8px 8px #abc0a1be";
        message.style.outline = "2px solid #b0c4b186";
    
        setTimeout(() => {
          message.style.transform = "scale(1)";
          message.style.boxShadow = "none";
          message.style.outline = "none";
        }, 200);
      };

      const navigateWithDelay_upload = () => {
        setTimeout(() => {
          navigate("/marksupload/sem1");
        }, 500);
      };

      // const mqpAnimation = () => {
      //   const message = document.querySelector(".mqp_name1");
      //     if (message) {
      //       message.style.transform = "scale(1.07)";
      //       // message.style.boxShadow = "0 0 8px 8px rgba(0, 0, 0, 0.349)";
      //       // message.style.outline = "3px solid #b0c4b186";
      
      //       setTimeout(() => {
      //         message.style.transform = "scale(1)";
      //         message.style.boxShadow = "none";
      //         message.style.outline = "none";
      //       }, 200);
      //     }
      // };

      const navigateWithDelay_mqp = () => {
        setTimeout(() => {
          navigate("/assignments_mqp");
        }, 100);
      };

    const navigate = useNavigate();
    return (
        <div className="HomepageBody">
            <div className="sem1_title">Semester-1</div>
            <div className="assignments_container">
                <div className="assn_title">
                    Assignments
                </div>
                <div className="assn_name">
                    <li className="assn_name1" onClick={() => { navigateWithDelay_assn(); }}>Assignment 1</li>
                    <li className="assn_name1" onClick={() => { navigateWithDelay_assn(); }}>Assignment 2</li>
                    <li className="assn_name1" onClick={() => { navigateWithDelay_assn(); }}>Assignment 3</li>
                </div>
            </div>
            <div className="marks_upload">
                <div className="marks_upload_title">Upload your marks </div>
                <span onClick={() => { uploadAnimation(); navigateWithDelay_upload(); }}>here!</span>
            </div>
            <div className="mqp_container">
                <div className="mqp_title">
                    Model Question Paper's
                </div>
                <div className="mqp_name">
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 1</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 2</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 3</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 4</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 5</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 6</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 7</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 8</li>
                    <li className="mqp_name1" onClick={() => { navigateWithDelay_mqp(); }}>Subject 9</li>
                </div>
            </div>
        </div>
    );
}