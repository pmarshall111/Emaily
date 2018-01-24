import React from "react";

const SurveyItem = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="flexbox">
        <div>{props.good} Good</div>
        <div>{props.bad} Bad</div>
      </div>
      <p>Number of surveys sent: {props.count}</p>
    </div>
  );
};

export default SurveyItem;
