import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import the spinner
import exchangeImg from '../../assets/images/exchangeImg.png';

function Table() {
  const [search, setSearch] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
 const URL=import.meta.env.VITE_CRYPTO_LIVE_URL
 const API=import.meta.env.VITE_CRYPTO_LIVE_API


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          URL,{
            headers: {
              "X-API-KEY": API,
              "accept": "application/json"
            }
          }
        );
        setLoading(false);
        setCryptoData(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData();

    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setCurrentTime(
        `Last Updated ${now.toLocaleDateString("en-US", options)}`
      );
    };

    updateTime();
  }, []);

  const filteredData = search
    ? cryptoData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    : cryptoData;

  return (
    <div className="mt-6 lg:px-24 md:px-10 px-4 pb-5">
  <h1 className="text-white text-md xs:text-xl pl-3 sm:pl-0  md:text-2xl lg:text-2xl font-semibold mb-5 mt-8 sm:mt-12 md:mt-14 lg:mt-16">
  Cryptocurrency Live Market List
</h1>
      <div className="flex justify-between items-center mb-4">
        <span className="flex flex-row items-center gap-x-3">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 focus:outline-none bg-custom-blue border-2 text-white md:w-80 w-40 h-10 sm:h-full border-table-color rounded"
          />
          <img src={exchangeImg} className="rounded-full w-7 ease-in hover:scale-90" alt="" />
        </span>
      
        <span className="text-gray-500 text-[8px] xs:text-[12px] sm:text-[14px] ">{currentTime}</span>
      </div>

      <div className="relative overflow-x-auto shadow-md rounded-lg border border-gray-600" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {loading ? ( 
          <div className="flex justify-center items-center h-64">
            <ClipLoader color={"#ffffff"} loading={loading} size={50} />
          </div>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right">
            {/* Table header */}
            <thead className="text-xs text-white bg-table-color">
              <tr className="h-14">
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  1h%
                </th>
                <th scope="col" className="px-6 py-3">
                  24h%
                </th>
                <th scope="col" className="px-6 py-3">
                  7day%
                </th>
                <th scope="col" className="px-6 py-3">
                  1m%
                </th>
                <th scope="col" className="px-6 py-3">
                  Market Cap
                </th>
                <th scope="col" className="px-6 py-3">
                  Volume(24)
                </th>
              </tr>
              <tr className="h-4"></tr>
            </thead>
            
            {/* Table body */}
            <tbody className="text-white">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id} className="bg-custom-blue mt-2 border border-table-color">
                    <th scope="row" className="px-6 py-4 font-medium text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 flex items-center">
                      <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2"/>
                      {item.name}
                    </td>
                    <td className="px-6 py-4">${parseFloat(item.price).toFixed(4)}</td>
                    <td className={`px-6 py-4 ${item.priceChange1h < 0 ? 'text-red-500' : 'text-green-300'}`}>{item.priceChange1h}%</td>
                    <td className={`px-6 py-4 ${item.priceChange1d < 0 ? 'text-red-500' : 'text-green-300'}`}>{item.priceChange1d}%</td>
                    <td className={`px-6 py-4 ${item.priceChange1w < 0 ? 'text-red-500' : 'text-green-300'}`}>{item.priceChange1w}%</td>
                    <td className={`px-6 py-4 ${item.priceChange1m < 0 ? 'text-red-500' : 'text-green-300'}`}>{item.priceChange1w}%</td>
                    <td className="px-6 py-4">${parseFloat(item.marketCap).toFixed(1)}</td>
                    <td className="px-6 py-4">{item.volume}</td>
                  </tr>
                ))
              ) :  (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    No matching results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;
