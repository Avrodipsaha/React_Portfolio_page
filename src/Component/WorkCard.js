import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project_card">
      <img src={props.imgsrc} alt="projct" />
      <h2 className="project_title">{props.title}</h2>
      <div className="pro_details">
        <p> {props.text}</p>
        <div className="pro_btns">
          {/* <NavLink to={props.view} className="btn"> */}
          <NavLink
            to={{ pathname: `${props.view}` }}
            target="_blank"
            className="btn"
          >
            view
          </NavLink>
          <NavLink to={props.source} className="btn">
            source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
