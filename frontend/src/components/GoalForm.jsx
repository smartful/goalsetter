import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalsSlice";

const GoalForm = () => {
  const [goal, setGoal] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text: goal }));
    setGoal("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
