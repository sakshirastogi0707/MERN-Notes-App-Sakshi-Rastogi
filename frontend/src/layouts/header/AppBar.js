import React, { useEffect, useState } from "react";
import logo from "../../assets/images/AppLogo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";
import { useNavigate } from "react-router-dom";
export default function AppBar() {
  const [UserData, setUserData] = useState(null);
  const navigate = useNavigate();
  function userLogout(message) {
    if (message) {
      localStorage.clear("User");
      toast.success("Logout Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      return false;
    }
  }
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("User"));
    setUserData(res);
  }, []);

  return (
    <div>
      {UserData ? (
        <nav class="navbar">
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/notes">Notes</a>
              </li>
              <li>
                <a
                  href="/login"
                  onClick={() => userLogout("Are you really want to Logout")}
                >
                  Logout
                </a>
              </li>
            </ul>
            <a href="/home">
              <img class="logo2" src={logo} />
            </a>
          </div>
        </nav>
      ) : (
        <nav class="navbar">
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </ul>
            <a href="/login">
              <img class="logo2" src={logo} />
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
