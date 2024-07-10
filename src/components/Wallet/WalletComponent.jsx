import React, { useState } from "react";
import WithdrawForm from "./WithdrawForm";

function Wallet() {
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

  const handleWithdrawClick = () => {
    setShowWithdrawForm(true);
  };

  return (
    <div className="bg-custom-blue min-h-screen text-white">
      <div className="flex flex-col justify-center items-center gap-y-4 text-center">
        <span className="underline underline-offset-8 text-xl xs:text-2xl sm:text-3xl">My Wallet</span>
        <div className="flex mt-4 flex-col px-20 py-10 gap-y-2 justify-center rounded-md items-center border border-green-800">
          <span>Available Balance</span>
          <span>100USDT</span>
        </div>
        {!showWithdrawForm && (
          <button
            type="button"
            className="ease-in hover:scale-90 md:w-60 w-1/2 bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
            onClick={handleWithdrawClick}
          >
            Withdraw
          </button>
        )}
        {showWithdrawForm && <WithdrawForm />}
      </div>
    </div>
  );
}

export default Wallet;
