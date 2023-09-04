import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);

  const increaseBudget = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
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
