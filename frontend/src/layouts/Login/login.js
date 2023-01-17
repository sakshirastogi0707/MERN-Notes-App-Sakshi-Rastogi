import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import userService from "../../service/api/UserService";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  const onSubmitLogin = async () => {
    try {
      const requestBody = {
        phone: phone,
      };
      if (!phone) {
        toast.error("Please enter your Number.");
      } else {
        const isLogin = await userService.loginUser("login", requestBody);
        if (isLogin) {
          toast.success("You Log In Successfully");
          setTimeout(() => {
            navigate("/home");
            return localStorage.setItem("User", JSON.stringify(isLogin));
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="LoginContainer">
      <div className="LoginSubContainer">
        <h1 className="Login-heading">Login Form</h1>
        <input
          class="login-text"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="loginBtn"
          type="submit"
          value="Login"
          onClick={() => onSubmitLogin()}
        />

        <p className="msglink">
          <a href="#" onClick={() => navigate("/signup")}>
            New?. Create an account?
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
