import React from "react";

const GoalItem = ({ goal }) => {
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleDateString("fr-FR")}</div>
      <h2>{goal.text}</h2>
    </div>
  );
};

export default GoalItem;