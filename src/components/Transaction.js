import React, { useContext } from "react";

import  GlobalContext  from "../context/GlobalContext";

export const Transaction = ({ transaction: { id, text, amount } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
