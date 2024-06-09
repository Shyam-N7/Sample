import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
export default function BranchSelection() {
  const navigate = useNavigate();

  const navigateWithDelay = () => {
    setTimeout(() => {
      navigate("/year_selection");
    }, 500);
  };
  
  const navigateWithDelay_1 = () => {
    setTimeout(() => {
      navigate("/year_selection");
    }, 500);
  };

  const navigateWithDelay_2 = () => {
    setTimeout(() => {
      navigate("/year_selection");
    }, 500);
  };

  const [currentSelection, setCurrentSelection] = useState(null);

  return (
    <div className="Homepage">
      <div className="branch_title">Select your branch?</div>
      <div className="Buttons">
        <button onClick={() => {  navigateWithDelay(); }} className="home_buttons">
          CSE
        </button>
        <button onClick={() => {  navigateWithDelay(); }} className="home_buttons">
          ISE
        </button>
        <button onClick={() => {  navigateWithDelay(); }} className="home_buttons">
          ECE
        </button>
        <button className="home_buttons" onClick={() => {setCurrentSelection(1);  }}>
          CSE - AI
        </button>
        {currentSelection === 1 && (
          <div>
            <button onClick={() => {  navigateWithDelay_1(); }} className="home_button_1">
              ML
            </button>
            <button onClick={() => {  navigateWithDelay_2(); }} className="home_button_2">
              DS
            </button>
          </div>
        )}
        <button onClick={() => {  navigateWithDelay(); }} className="home_buttons">
          EEE
        </button>
        <button onClick={() => {  navigateWithDelay(); }} className="home_buttons">
          ME
        </button>
        <button onClick={() => {  navigateWithDelay(); }} className="home_buttons">
          CV
        </button>
        <button onClick={() => {  navigateWithDelay(); }} disabled className="home_buttons">
          CS
        </button>
      </div>
    </div>
  );
}

//<button onClick={() => navigate("/yearselection")} className="home_buttons">