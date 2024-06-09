import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import loginbg from '../Design/d1.png';
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
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
    axios.post('http://localhost:3001/admin_login', { email, password })
      .then(result => {
        console.log(result);
        if (result.status === 200) {
          toast.success('Login successfull', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: Bounce,
          });
          navigate('/student_details');
          return;
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Invalid email or password', {
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
      });
  }

  return (
    <div className="login_password_container">
      <div className="login_side">
        <div className="design">
          <img src={loginbg} alt="" className="login-bg" />
        </div>
        <div className="login_container">
          <form onSubmit={handleSubmit}>
            <h1 className="title_login">Login</h1>
            <div className="inputs_container">
              <div className="login_input">
                <label className="login_lable">Email</label>
                <input className="input_login" type="email"  placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="login_input">
                <label className="login_lable">Password</label>
                <input className="input_login" type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="login_button">
                {" "}
                <button type="submit">Login</button>
              </div>
              <div className="regiser_text">
                <h1>
                  if you don't have account?{" "}
                  <span onClick={() => navigate("/admin_register")}>Register</span>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}