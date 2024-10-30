import React from "react";

const AmountInput = ({ amount, setAmount }) => {
  return (
    <div className="amount">
      <p>Enter Amount</p>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
  );
};

export default AmountInput;
