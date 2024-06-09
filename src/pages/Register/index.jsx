import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./index.css";
import { useNavigate } from "react-router-dom";
import loginbg from '../Design/d1.png';
import { useState } from "react";

export default function Register() {

  const [name, setName] = useState('')
  const [usn, setUsn] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !usn || !email || !password) {
      toast.error('Please enter all fields', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
      return;
    }
    else {
      toast.success('Registered Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    }
    axios.post('http://localhost:3001/register', { name, usn, email, password })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          navigate('/login');
        } else {
          toast.error('Error processing request');
        }
      })
      .catch(err => {
        console.log(err.response.data);
        toast.error(err.response.data.message);
      });
  };

  const buttonAnimation = () => {
    const button = document.querySelector(".login_button");
    button.style.transform = "scale(1.07)";
    button.style.outline = "1px solid #b0c4b186";

    setTimeout(() => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
      button.style.outline = "none";
    }, 300);
  };

  return (
    <div className="login_password_container">
      <div className="login_side">
        <div className="design">
          <img src={loginbg} alt="" className="login-bg" />
        </div>
        <div className="login_container">
          <form onSubmit={handleSubmit}>
            <h1 className="title_login">Register</h1>
            <div className="inputs_container">
              <div className="login_input">
                <label className="login_lable">Name</label>
                <input className="input_login" placeholder="Enter user name" onChange={e => setName(e.target.value)} />
              </div>
              <div className="login_input">
                <label className="login_lable">USN</label>
                <input className="input_login" placeholder="Enter USN" onChange={e => setUsn(e.target.value)} />
              </div>
              <div className="login_input">
                <label className="login_lable">Email</label>
                <input className="input_login" placeholder="Enter email" type="email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="login_input">
                <label className="login_lable">Password</label>
                <input className="input_login" type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="login_button">
                {" "}
                <button onClick={() => { buttonAnimation(); }}>Register</button>
              </div>

              <div className="regiser_text">
                <h1>
                  if you already have account!{" "}
                  <span onClick={() => navigate("/login")}>Login</span>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
