import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
export default function BranchSelection() {
  const navigate = useNavigate();

  const buttonAnimation = () => {
    const messages = document.querySelectorAll(".home_buttons");
        messages.forEach((message) => {
          if (message) {
            message.style.transform = "scale(1.07)";
            message.style.boxShadow = "0 0 8px 8px rgba(0, 0, 0, 0.349)";
            message.style.outline = "3px solid #b0c4b186";
      
            setTimeout(() => {
              message.style.transform = "scale(1)";
              message.style.boxShadow = "none";
              message.style.outline = "none";
            }, 300);
          }
        });
      };

  const navigateWithDelay = () => {
    setTimeout(() => {
      navigate("/year_selection");
    }, 500);
  };

  const buttonAnimation_1 = () => {
    const messages = document.querySelectorAll(".home_button_1");
        messages.forEach((message) => {
          if (message) {
            message.style.transform = "scale(1.07)";
            message.style.boxShadow = "0 0 8px 8px rgba(0, 0, 0, 0.349)";
            message.style.outline = "3px solid #b0c4b186";
      
            setTimeout(() => {
              message.style.transform = "scale(1)";
              message.style.boxShadow = "none";
              message.style.outline = "none";
            }, 300);
          }
        });
      };

  const navigateWithDelay_1 = () => {
    setTimeout(() => {
      navigate("/year_selection");
    }, 500);
  };

  const buttonAnimation_2 = () => {
    const messages = document.querySelectorAll(".home_button_2");
        messages.forEach((message) => {
          if (message) {
            message.style.transform = "scale(1.07)";
            message.style.boxShadow = "0 0 8px 8px rgba(0, 0, 0, 0.349)";
            message.style.outline = "3px solid #b0c4b186";
      
            setTimeout(() => {
              message.style.transform = "scale(1)";
              message.style.boxShadow = "none";
              message.style.outline = "none";
            }, 300);
          }
        });
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
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} className="home_buttons">
          CSE
        </button>
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} className="home_buttons">
          ISE
        </button>
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} className="home_buttons">
          ECE
        </button>
        <button className="home_buttons" onClick={() => {setCurrentSelection(1); buttonAnimation(); }}>
          CSE - AI
        </button>
        {currentSelection === 1 && (
          <div>
            <button onClick={() => { buttonAnimation_1(); navigateWithDelay_1(); }} className="home_button_1">
              ML
            </button>
            <button onClick={() => { buttonAnimation_2(); navigateWithDelay_2(); }} className="home_button_2">
              DS
            </button>
          </div>
        )}
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} className="home_buttons">
          EEE
        </button>
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} className="home_buttons">
          ME
        </button>
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} className="home_buttons">
          CV
        </button>
        <button onClick={() => { buttonAnimation(); navigateWithDelay(); }} disabled className="home_buttons">
          CS
        </button>
      </div>
    </div>
  );
}

//<button onClick={() => navigate("/yearselection")} className="home_buttons">