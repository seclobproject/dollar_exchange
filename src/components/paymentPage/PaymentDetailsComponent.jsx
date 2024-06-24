import React, { useState } from "react";
import PaymentStatus from "./PaymentStatus";
import RadioButtons from "./RadioButtons";
import OrderSummary from "./OrderSummary";
import BankAccountDetails from "./BankAccountDetails";
import CashOnDeliveryDetails from "./CashOnDeliveryDetails";
import ReviewDetails from "./ReviewDetails";

function PaymentDetailsComponent() {
  const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [location, setLocation] = useState("");
  const [isReview, setIsReview] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [details, setDetails] = useState({});
  const [buyQuantity, setBuyQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [locationError, setLocationError] = useState("");

  const handleData = (data) => {
  
    console.log(location);
    setDetails(data);
    setIsReview(true);
    setCurrentStep(2);
  };

  const handleBack = () => {
    setIsReview(false);
    setCurrentStep(1);
  };

  return (
    <div>
      <hr className="h-px bg-gray-200 border-0" />
      <div className="bg-custom-blue min-h-screen xl:pl-24 lg:pl-12 md:pl-8 flex md:flex-row flex-col">
        <div className="w-full md:w-2/3 flex flex-col">
          <h1 className="md:text-xl text-sm  xs:text-md  underline px-6 py-4 xs:py-6 text-white underline-offset-8">
            {!isReview ? "Buyer Payment Details" : "Review"}
          </h1>
          <PaymentStatus currentStep={currentStep} />
          {!isReview ? (
            <RadioButtons
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              location={location}
              setLocation={setLocation}
              locationError={locationError}
              setLocationError={setLocationError}
            />
          ) : (
            ""
          )}
          <div className="md:hidden">
            <OrderSummary buyQuantity={buyQuantity} amount={amount} />
          </div>
          {!isReview ? (
            <div className="order-3 md:order-3 text-white p-6 rounded shadow-md w-full bg-custom-blue">
              {paymentMethod === "Cash on delivery" ? (
                <CashOnDeliveryDetails
                  handleData={handleData}
                  handleBack={handleBack}
                  setBuyQuantity={setBuyQuantity}
                  setAmount={setAmount}
                  location={location}
                  setLocationError={setLocationError}
                />
              ) : (
                <BankAccountDetails
                  handleData={handleData}
                  handleBack={handleBack}
                  setBuyQuantity={setBuyQuantity}
                  setAmount={setAmount}
                  location={location}
                  setLocationError={setLocationError}
                />
              )}
              <div className="flex flex-col "></div>
            </div>
          ) : (
            <ReviewDetails
              fields={details}
              paymentMethod={paymentMethod}
              handleBack={handleBack}
              setCurrentStep={setCurrentStep}
            />
          )}
        </div>
        <div className="min-h-screen w-[1px] re bg-white hidden md:block"></div>
        <div className="hidden md:block">
          <OrderSummary buyQuantity={buyQuantity} amount={amount} />
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailsComponent;
