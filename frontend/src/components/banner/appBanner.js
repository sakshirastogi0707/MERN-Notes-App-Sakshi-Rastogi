import React from "react";
import Button from "../buttons/button";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function AppBanner(props) {
  const navigate = useNavigate();
  return (
    <div className="bannerContainner">
      <div className="bannerTitle">
        <span className="title">{props.title}</span>
      </div>
      <div className="subHeadingContainer">
        <span className="subHeading">{props.subHeading}</span>
      </div>
      <Button title="Get Started" onClick={() => navigate("/notes")} />
      <img className="bannerIMG" src={props.image} alt="" />
    </div>
  );
}
