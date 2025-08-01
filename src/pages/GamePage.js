import React from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { id } = useParams();
  const { ageGroup } = useParams();
  return (
    <div>
      <h2>Games for Age Group: {ageGroup}</h2>
      {}
    </div>
  );
};

export default GamePage;


