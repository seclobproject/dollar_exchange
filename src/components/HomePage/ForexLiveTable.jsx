import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/forexImgs/flag1.png";
import img2 from "../../assets/images/forexImgs/flag2.png";
import img3 from "../../assets/images/forexImgs/flag3.png";
import img4 from "../../assets/images/forexImgs/flag4.png";
import img5 from "../../assets/images/forexImgs/flag5.png";
import exchangeImg from "../../assets/images/exchangeImg.png";
function ForexLiveTable() {
  const [search, setSearch] = useState("");
  const [currentTime, setCurrentTime] = useState("");

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
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const tableData = [
    {
      id: 1,
      name: "UAE",
      image: img1,
      price: "3.67",
      oneHour: "0.21%",
      twentyFourHour: "6.39%",
      sevenDay: "15.19%",
      oneMonth: "21.68%",
      marketCap: "$1,375.05B",
      volume: "$5512.2B",
    },
    {
      id: 2,
      name: "Oman",
      image: img2,
      price: "3.75",
      oneHour: "0.21%",
      twentyFourHour: "6.39%",
      sevenDay: "15.19%",
      oneMonth: "15.19%",
      marketCap: "$1,375.05B",
      volume: "$5512.2B",
    },
    {
      id: 3,
      name: "Soudi Arebia",
      image: img3,
      price: "0.38",
      oneHour: "0.21%",
      twentyFourHour: "6.39%",
      sevenDay: "7.19%",
      oneMonth: "8.19%",
      marketCap: "$1,375.05B",
      volume: "$5512.2B",
    },
    {
      id: 4,
      name: "Maleysia",
      image: img4,
      price: "0.38",
      oneHour: "0.23%",
      twentyFourHour: "6.39%",
      sevenDay: "15.19%",
      oneMonth: "24.57%",
      marketCap: "$1,375.05B",
      volume: "$5512.2B",
    },
    {
      id: 5,
      name: "Bahrain",
      image: img5,
      price: "4.70",
      oneHour: "0.21%",
      twentyFourHour: "1.39%",
      sevenDay: "3.19%",
      oneMonth: "5.56%",
      marketCap: "$1,375.05B",
      volume: "$5512.2B",
    },
  ];

  const filteredData = search
    ? tableData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : tableData;

  return (
    <div className="mt-6 lg:px-24 md:px-10 px-4 pb-5">
      <h1 className="text-white text-md xs:text-xl pl-3 sm:pl-0  md:text-2xl lg:text-2xl font-semibold mb-5 mt-8 sm:mt-12 md:mt-14 lg:mt-16">
  Forex Live Market List
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
          <img
            src={exchangeImg}
            className="rounded-full w-7 ease-in hover:scale-90"
            alt=""
          />
        </span>

        <span className="text-gray-500 text-[8px] xs:text-[12px] sm:text-[14px] ">
          {currentTime}
        </span>
      </div>

      <div
        className="relative overflow-x-auto shadow-md rounded-lg border border-gray-600"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {" "}
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-white  bg-table-color">
            <tr className="h-14">
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price(USDT)
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

          <tbody className="text-white">
            {filteredData.length > 0 ? (
              filteredData.map((item) => {
                const oneHour = parseFloat(item.oneHour.replace("%", ""));
                const twentyFourHour = parseFloat(
                  item.twentyFourHour.replace("%", "")
                );
                const sevenDay = parseFloat(item.sevenDay.replace("%", ""));
                const oneMonth = parseFloat(item.oneMonth.replace("%", ""));

                return (
                  <tr
                    key={item.id}
                    className="bg-custom-blue mt-2 border border-table-color"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-6 h-6 mr-2"
                      />
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td
                      className={`px-6 py-4 ${
                        oneHour < 0.22 ? "text-red-500" : "text-green-300"
                      }`}
                    >
                      {item.oneHour}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        twentyFourHour < 6 ? "text-red-500" : "text-green-300"
                      }`}
                    >
                      {item.twentyFourHour}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        sevenDay < 9 ? "text-red-500" : "text-green-300"
                      }`}
                    >
                      {item.sevenDay}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        oneMonth < 9 ? "text-red-500" : "text-green-300"
                      }`}
                    >
                      {item.oneMonth}
                    </td>
                    <td className="px-6 py-4">{item.marketCap}</td>
                    <td className="px-6 py-4">{item.volume}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ForexLiveTable;
