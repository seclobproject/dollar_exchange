import { useState, useEffect } from "react";
import axios from "axios";

const CONVERT_URL = import.meta.env.VITE_CURRENCY_CONVERT_URL;
;

const useConversionRate = (fromCurrency, toCurrency) => {
  const [conversionRate, setConversionRate] = useState(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(`${CONVERT_URL}&from=${fromCurrency}&to=${toCurrency}&amount=1`);
        setConversionRate(response.data.quote);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  return conversionRate;
};

export default useConversionRate;
