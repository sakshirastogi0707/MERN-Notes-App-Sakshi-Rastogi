import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import userService from "../../service/api/UserService";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const requestBody = {
        username: username,
        phone: phone,
      };
      if (!username) {
        toast.error("Please enter user name.");
      } else if (!phone) {
        toast.error("Please enter phone number.");
      } else {
        setIsLoading(true);
        const userResponse = await userService.signupUser(
          "register",
          requestBody
        );
        if (userResponse) {
          toast.success("You Signup Successfully");
          setTimeout(() => {
            return navigate("/login");
          }, 1000);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="LoginContainer">
      <div className="LoginSubContainer">
        <h1 className="Login-heading">Sign up</h1>
        <input
          class="login-text"
          type="text"
          placeholder="Username"
          name="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          class="login-text"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          disabled={isLoading}
          className="loginBtn"
          type="submit"
          value="Signup"
          onClick={() => submitHandler()}
        />

        <p className="msglink">
          <a href="#" onClick={() => navigate("/login")}>
            Already have an account?
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
