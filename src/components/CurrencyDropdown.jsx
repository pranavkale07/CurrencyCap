import React from "react";

const CurrencyDropdown = ({ label, selectedCurrency, setCurrency, countryList }) => {
  return (
    <div>
      <p>{label}</p>
      <div className="select-container">
        <img src={`https://flagsapi.com/${countryList[selectedCurrency]}/flat/64.png`} alt="flag" />
        <select
          name={label.toLowerCase()}
          value={selectedCurrency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {Object.keys(countryList).map((currCode) => (
            <option key={currCode} value={currCode}>
              {currCode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
