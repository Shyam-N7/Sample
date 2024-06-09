import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
export default function YearSelection() {
  const navigate = useNavigate();

  const buttonAnimation = () => {
    const messages = document.querySelectorAll(".home_buttons2");
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
      navigate("/first_sem_information");
    }, 500);
  };

  const navigateWithDelay_2 = () => {
    setTimeout(() => {
      navigate("/second_sem_information");
    }, 500);
  };

  const navigateWithDelay_3 = () => {
    setTimeout(() => {
      navigate("/third_sem_information");
    }, 500);
  };

  const navigateWithDelay_4 = () => {
    setTimeout(() => {
      navigate("/fourth_sem_information");
    }, 500);
  };

  const navigateWithDelay_5 = () => {
    setTimeout(() => {
      navigate("/fifth_sem_information");
    }, 500);
  };

  const navigateWithDelay_6 = () => {
    setTimeout(() => {
      navigate("/sixth_sem_information");
    }, 500);
  };

  const navigateWithDelay_7 = () => {
    setTimeout(() => {
      navigate("/seventh_sem_information");
    }, 500);
  };

  const navigateWithDelay_8 = () => {
    setTimeout(() => {
      navigate("/eighth_sem_information");
    }, 500);
  };

  const [currentSelection, setCurrentSelection] = useState(null);

  return (
    <div className="HomepageBody">
      <div className="container">
        <div className="year_title">Select Your Year?</div>
        <div className="Buttons_home1">
          <button className="home_buttons11" onClick={() => { buttonAnimation(); setCurrentSelection(1) }}>
            First Year
          </button>
          {currentSelection === 1 && (
            <div>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_1(); }} className="home_buttons2">
                1st Sem (C-Cycle)
              </button>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_2();}} className="home_buttons2">
                2nd Sem (P-Cycle)
              </button>
            </div>
          )}
          <button className="home_buttons11" onClick={() => { buttonAnimation(); setCurrentSelection(2) }}>
            Second Year
          </button>
          {currentSelection === 2 && (
            <div>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_3(); }} className="home_buttons2">
                3rd Sem
              </button>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_4(); }} className="home_buttons2">
                4th Sem
              </button>
            </div>
          )}
          <button className="home_buttons11" onClick={() => { buttonAnimation(); setCurrentSelection(3) }} >
            Third Year (locked)
          </button>
          {currentSelection === 3 && (
            <div>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_5(); }} className="home_buttons2">
                5th Sem
              </button>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_6(); }} className="home_buttons2">
                6th Sem
              </button>
            </div>
          )}
          <button className="home_buttons11" onClick={() => { buttonAnimation(); setCurrentSelection(4) }} >
            Fourth Year (locked)
          </button>
          {currentSelection === 4 && (
            <div>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_7(); }} className="home_buttons2">
                7th Sem
              </button>
              <button onClick={() => { buttonAnimation(); navigateWithDelay_8(); }} className="home_buttons2">
                8th Sem
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}