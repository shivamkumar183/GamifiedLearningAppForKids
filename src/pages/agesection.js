import React from "react";
import { useNavigate } from "react-router-dom";
import "./ageselection.css";

const AgeSelection = () => {
  const navigate = useNavigate();

  const handleAgeSelect = (ageGroup) => {
    if (ageGroup === "3-5 Low Level") {
      navigate("/profile1");
    } else if (ageGroup === "6-8 Moderate Level") {
      navigate("/profile2");
    } else if (ageGroup === "9-12 Hard Level") {
      navigate("/profile3");
    }
  };

  return (
    <div className="age-selection-container">
      <h2>Select Your Age Group</h2>
      <div className="age-buttons">
        <button onClick={() => handleAgeSelect("3-5 Low Level")}>3-5 Years, Low Level</button>
        <button onClick={() => handleAgeSelect("6-8 Moderate Level")}>6-8 Years, Moderate Level</button>
        <button onClick={() => handleAgeSelect("9-12 Hard Level")}>9-12 Years, Hard Level</button>
      </div>
    </div>
  );
};

export default AgeSelection;
