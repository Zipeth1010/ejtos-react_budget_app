import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeCurrency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-success">
      <span>
        Currency :
        <select
          className="selectpicker"
          data-style="btn-success"
          onChange={(event) => {
            changeCurrency(event.target.value);
          }}
        >
          <option value="$">$ Dollar</option>
          <option value="£" selected>
            £ Pound
          </option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      </span>
    </div>
  );
};

export default ChangeCurrency;
