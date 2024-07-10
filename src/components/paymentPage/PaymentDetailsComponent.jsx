import React, { useState, useEffect, act } from "react";
import PaymentStatus from "./PaymentStatus";
import RadioButtons from "./RadioButtons";
import BankAccountDetails from "./BankAccountDetails";
import CashOnDeliveryDetails from "./CashOnDeliveryDetails";
import ReviewDetails from "./ReviewDetails";
import { useLocation, useNavigate } from "react-router-dom";
import useGetLocation from "../../custom_hooks/useGetLocation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import orderAPI from "../../apis/orderApi";
import { useAuth } from "../../context/authContext";
const { codBuying, codSelling } = orderAPI();

function PaymentDetailsComponent() {
  const { action } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [isReview, setIsReview] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [details, setDetails] = useState({});
  const userLocation = useGetLocation();
  console.log(userLocation);
  const location = useLocation();
  const navigate = useNavigate();




  //show  if quantity and amount not selected in buyingPage
  const { quantity, totalAmount, toCurrency, exchangeRate } =
    location.state || {};
  useEffect(() => {
    if (!quantity || !exchangeRate || !toCurrency) {
          toast.error("Please select a quantity and exchange rate.", {
        position: "top-center",
        autoClose: 1500,
        onClose: () => navigate('/buyingPage')
      });
    }
  }, [quantity, exchangeRate, toCurrency, navigate]);

  const orderData = {
    [action === "buy" ? "buyQuantity" : "SellQuantity"]: quantity,
    amount: exchangeRate,
    currency: toCurrency,
    Totalamount: parseFloat(totalAmount),
  };

  const handleData = async (data) => {
    if (userLocation?.coordinates?.lat && userLocation?.coordinates?.lng) {
      const allDetails = {
        [action === "buy" ? "orderDetails" : "ExchangeDetails"]: orderData,
        paymentMethod,
        codDetails:
          paymentMethod === "Cash on delivery"
            ? {
                companyName: data.company_name,
                phoneNumber: data.phone_number,
                emailId: data.email_id,
                country: data.country,
                fullAddress: data.full_address,
                postCode: data.post_code,
                currentLocation: {
                  type: "Point",
                  coordinates: [
                    userLocation?.coordinates?.lat,
                    userLocation?.coordinates?.lng,
                  ],
                },
              }
            : null,
        bankTransferDetails:
          paymentMethod === "Bank Transfer"
            ? {
                beneficiaryName: data.beneficiary_name,
                branch: data.branch,
                ifscCode: data.ifsc_code,
                bankName: data.bank_name,
                accountNo: data.account_no,
                accountType: data.account_type,
              }
            : null,
      };

      try {
        let response;
        if (action === "buy") {
          response = await codBuying(allDetails);
        } else if (action === "sell") {
          response = await codSelling(allDetails);
        }

        if (response.success) {
          setDetails(response.data);
          setIsReview(true);
          setCurrentStep(2);
        } else {
          console.error("Failed to create order");
        }
      } catch (error) {
        console.error("Error creating order:", error);
      }
    } else {
      toast.error("Fetching user location. Please wait.", {
        position: "top-center",
      });
    }
  };

  const handleBack = () => {
    setIsReview(false);
    setCurrentStep(1);
  };
  return (
    <div>
      <ToastContainer />
      <hr className="h-px bg-gray-200 border-0" />
      <div className="bg-custom-blue min-h-screen xl:pl-24 lg:pl-12 md:pl-8 flex flex-col">
        <div className="w-full md:w-2/3 flex flex-col">
          <h1 className="md:text-xl lg:text-2xl text-sm  xs:text-lg  underline px-6 py-4 xs:py-6 text-white underline-offset-8">
            {!isReview ? "Buyer Payment Details" : "Review"}
          </h1>
          <PaymentStatus currentStep={currentStep} />

          <div className="flex px-6 xs:my-4 my-2 flex-col gap-y-4  justify-center items-start">
            <span className="text-white md:text-lg text-md xs:text-md">
            {action === 'buy' ? 'Buying Quantity' : 'Selling Quantity'}
            </span>
            <div className="text-center font-medium text-black xs:text-md text-sm  bg-gray-400 rounded-md xs:w-72 w-2/3 xxss:py-2 py-0">
              {quantity} USDT
            </div>
          </div>

          {!isReview ? (
            <RadioButtons
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          ) : (
            ""
          )}

          {!isReview ? (
            <div className="order-3 md:order-3 text-white p-6 rounded shadow-md w-full bg-custom-blue">
              {paymentMethod === "Cash on delivery" ? (
                <CashOnDeliveryDetails
                  handleData={handleData}
                  handleBack={handleBack}
                />
              ) : (
                <BankAccountDetails
                  handleData={handleData}
                  handleBack={handleBack}
                />
              )}
              <div className="flex flex-col "></div>
            </div>
          ) : (
            <ReviewDetails
              data={details}
              action={action}
              handleBack={handleBack}
              setCurrentStep={setCurrentStep}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailsComponent;
