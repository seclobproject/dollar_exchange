import React from 'react';

function WithdrawForm() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 text-center">
      <span className="text-xl xs:text-2xl sm:text-3xl">Withdraw Form</span>
      {/* Add form fields here */}
      <div className="flex mt-4 flex-col px-20 py-10 gap-y-2 justify-center rounded-md items-center border border-green-800">
        <span>Withdraw Amount</span>
        <input type="text" className="text-black rounded-md p-2" placeholder="Enter amount" />
      </div>
      <button
        type="submit"
        className="ease-in hover:scale-90 md:w-60 w-1/2 bg-custom-green text-black font-medium py-2 rounded-md mt-4 md:mt-6"
      >
        Confirm
      </button>
    </div>
  );
}

export default WithdrawForm;
