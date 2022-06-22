import React from "react";
import "./WorkCard.css";
// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project_card">
      <img src={props.imgsrc} alt="projct" />
      <h2 className="project_title">{props.title}</h2>
      <div className="pro_details">
        <p> {props.text}</p>
        <div className="pro_btns">
          {/* <NavLink to={props.view} className="btn"> */}
          <a href={props.view} target="_blank" rel="noreferrer">
            <button className="btn">view</button>
          </a>

          <a href={props.source} rel="noreferrer">
            <button className="btn">source</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
