import React, { useEffect, useState } from "react";
import AmountInput from "./AmountInput";
import CurrencyDropdown from "./CurrencyDropdown";
import { countryList } from "../country_codes";

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const ConverterForm = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("1");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [message, setMessage] = useState("Getting exchange rate...");

  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  const getExchangeRate = async () => {
    if (amount === "" || amount <= 0) {
      setAmount("1");
    }

    let response = await fetch(`${BASE_URL}/${fromCurrency.toLowerCase()}.json`);
    let data = await response.json();
    let rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
    let finalAmt = (amount * rate).toFixed(2);
    setMessage(`${amount} ${fromCurrency} = ${finalAmt} ${toCurrency}`);
    setExchangeRate(rate);
  };

  return (
    <form>
      <AmountInput amount={amount} setAmount={setAmount} />
      <div className="dropdown">
        <CurrencyDropdown
          label="From"
          selectedCurrency={fromCurrency}
          setCurrency={setFromCurrency}
          countryList={countryList}
        />
        <i className="fa-solid fa-arrow-right-arrow-left"></i>
        <CurrencyDropdown
          label="To"
          selectedCurrency={toCurrency}
          setCurrency={setToCurrency}
          countryList={countryList}
        />
      </div>
      <div className="msg">{message}</div>
      <button onClick={(e) => { e.preventDefault(); getExchangeRate(); }}>Convert</button>
    </form>
  );
};

export default ConverterForm;
