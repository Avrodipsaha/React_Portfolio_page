import React from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCartData from "./WorkCartData";

const Work = () => {
  return (
    <div className="work_container">
      <h1 className="project_heading">Projects</h1>
      <div className="project_container">
        {WorkCartData.map((val, idx) => {
          return (
            <WorkCard
              key={idx}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
