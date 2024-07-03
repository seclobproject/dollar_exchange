import React, { useEffect, useState } from "react";
import CustomDropdown from './CustomDropdown';
import { useNavigate } from "react-router-dom";

const CURRENCIES_URL = import.meta.env.VITE_CURRENCIES_URL;
const CONVERT_URL = import.meta.env.VITE_CURRENCY_CONVERT_URL;

function BuyComponent() {
  const navigate = useNavigate();
  const [currencyOptions, setCurrencyOptions] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AED");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");
  const [amount, setAmount] = useState(10);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(CURRENCIES_URL);
        const data = await response.json();
        setCurrencyOptions(data.available_currencies);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`${CONVERT_URL}&from=${fromCurrency}&to=${toCurrency}&amount=1`);
        const data = await response.json();
        setExchangeRate(data.quote);
        setLastUpdated(
          new Date(data.requested_time).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        );
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setError(false); 
  };

  const handlePayment = () => {
    if (!amount) {
      setError(true);
    } else {
      setError(false);
      navigate('/payment', {
        state: {
          amount,
          exchangeRate: (amount * exchangeRate).toFixed(4),
          toCurrency
        }
      });
    }
  };

  const getFlagUrl = (currencyCode) => {
    return `https://flagsapi.com/${currencyCode.substring(0, 2)}/flat/64.png`;
  };

  return (
    <>
      <hr className="h-px bg-gray-200 border-0" />
      <div className="flex flex-col xs:gap-y-8 gap-y-6 lg:px-24 md:px-12 px-6 text-white">
        <span className="xl:text-3xl md:text-xl lg:text-2xl text-lg underline py-4 xs:py-6 text-white underline-offset-8">
          Buying Currency
        </span>
        <div className="flex sm:flex-row flex-col gap-x-10 gap-y-16">
          <div className="flex flex-col gap-y-4 h-10 text-white items-start justify-between">
            <span className="xs:text-lg text-md">Quantity To Buy</span>
            <input
              className="appearance-none text-xs xs:text-sm sm:text-base bg-custom-blue w-full lg:w-72 md:w-64 py-2 pl-3 pr-10 leading-6 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:leading-5 flex items-center"
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
            {error && <span className="-mt-4 text-red-400 text-xs xs:text-sm">Please choose the quantity</span>}
          </div>
          
          <div className="flex flex-col gap-y-4 text-white items-start justify-between">
            <span className="xs:text-lg text-md">From</span>
            <CustomDropdown
              options={currencyOptions}
              selectedValue={toCurrency}
              onValueChange={setToCurrency}
              getFlagUrl={getFlagUrl}
            />
          </div>
        </div>

        {exchangeRate ? (
          <>
            <span className="xs:text-lg text-md">
              {amount} USD = {(amount * exchangeRate).toFixed(4)} {toCurrency}
            </span>
            <p className="xs:text-sm text-xs">Last Updated: {lastUpdated}</p>
          </>
        ) : (
          <span className="xs:text-lg text-md">Loading exchange rate...</span>
        )}

        <div className="flex flex-col">
          <button
            onClick={handlePayment}
            type="submit"
            className="ease-in hover:scale-90 sm:w-60 lg:w-64 xl:w-72 w-full bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
          >
            Continue
          </button>
          <button
            type="button"
            className="ease-in hover:scale-90 sm:w-60 lg:w-64 xl:w-72 w-full bg-custom-blue border border-custom-green text-custom-green font-medium py-2 rounded-md mt-4 md:mt-6"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default BuyComponent;
