import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [visibleBudget, setVisibleBudget] = useState({ budget });

  const increaseBudget = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: £
        <input
          value={budget}
          type="number"
          step={10}
          onChange={(event) => {
            increaseBudget(event.target.value);
          }}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
