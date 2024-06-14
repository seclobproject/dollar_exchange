import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow.jsx";
import img from "../../assets/images/exchangeImg2.png";

const BASE_URL = "https://api.frankfurter.app/latest";

function CurrencyConverter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [reverseExchangeRate, setReverseExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(Object.keys(data));
        setFromCurrency("USD");
        setToCurrency("INR");
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`${BASE_URL}?amount=1&from=${fromCurrency}&to=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency]);
          setReverseExchangeRate(1 / data.rates[toCurrency]);
          const currentTime = new Date();
          setLastUpdated(
            currentTime.toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })
          );
        });
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  function handleSwapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <div className="flex flex-col lg:px-24 md:px-10 px-4 md:mt-4 xl:mt-10 mt-2 items-start  text-white justify-start  text-center">
      <h1 className="sm:text-2xl text-md font-semibold mb-2 xs:mb-4">
        Currency Converter
      </h1>
      <div className="text-gray-500 mt-0 mb-2 xs:hidden ">
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div className="flex xs:flex-row flex-col w-full  items-center mb-4">
        <div className="flex flex-col justify-between items-start">
          <p>From</p>
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </div>

        <span
          onClick={handleSwapCurrencies}
          className="cursor-pointer pt-5 px-4 ease-in hover:scale-90"
        >
          <img src={img} alt="" />
        </span>

        <div className="flex flex-col justify-between items-start">
          <p>To</p>
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
      </div>
      <div className="sm:text-lg mx-auto xs:mx-0 text-sm mt-2 flex flex-row text-gray-400">
        <p>
          1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
        </p>
        <p className="px-6">|</p>
        <p>
          1 {toCurrency} = {reverseExchangeRate.toFixed(4)} {fromCurrency}
        </p>
      </div>
      <div className="text-gray-500 mt-4 xs:block hidden">
        <p>Last Updated: {lastUpdated}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
