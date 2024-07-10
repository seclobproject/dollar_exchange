import React, { useEffect, useState } from "react";
import orderAPI from "../../apis/orderApi";
const { listOrders } = orderAPI();

function OrderStatusComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await listOrders();
        // Combine orderHistory and exchangeHistory into a single array with type labels
        const combinedData = [
          ...res.data.orderHistory.map(order => ({ ...order, type: 'order' })),
          ...res.data.exchangeHistory.map(exchange => ({ ...exchange, type: 'exchange' })),
        ];
        setData(combinedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="lg:px-24 md:px-12 px-6 pb-4">
      <div className="flex flex-col items-start gap-y-6 justify-center">
        <span className="text-white underline underline-offset-8 text-3xl py-4">
          Order Status
        </span>
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-slate-700 bg-opacity-45 px-4 py-4 flex flex-col justify-center items-start gap-y-3 xs:gap-y-4 rounded-md sm:w-2/3 lg:w-1/2 w-full"
          >
            <span className="text-gray-300 xs:text-sm text-xs">
              {`Order Number:${item?.type === 'order' ?item?.orderId:item.exchangeId}`}
            </span>
            <span className="text-white text-xs xxss:text-sm xs:text-md">
              {item?.type === 'order' ? (
                <>
                  {item?.codDetails?.orderDetails?.buyQuantity} {item?.codDetails?.orderDetails?.currency}{" "}
                  Buying request submitted.{" "}
                  <span className="underline text-orange-400 ">
                    {item.orderStatus}
                  </span>
                </>
              ) : (
                <>
                  {item?.ExchangeDetails?.SellQuantity} {item?.ExchangeDetails?.currency}{" "}
                  Exchange request submitted.{" "}
                  <span className="underline text-orange-400 ">
                    {item?.ExchangeStatus}
                  </span>
                </>
              )}
            </span>
            <div className="flex justify-between w-full">
              <div></div>
              <p className="text-xs xs:text-sm text-gray-300 pt-0 xs:pt-3">
                {new Date(item?.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderStatusComponent;
