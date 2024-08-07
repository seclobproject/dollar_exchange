import React from 'react';
import { TiArrowUp } from "react-icons/ti";
import { IoMdArrowDown } from "react-icons/io";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
function Buttons() {
  const navigate = useNavigate();
  const { isAuthenticated,setTradeAction } = useAuth(); 

  const handleTradeClick = (action) => {
    setTradeAction(action);
    isAuthenticated ? navigate("/details-form") : navigate('/login');
  };
  const handleClick=()=>{
    navigate('/order-status')
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 xs:gap-4 items-center w-full h-auto xs:py-12 py-4">
      <div onClick={() => handleTradeClick('sell')} className="flex gap-x-2 justify-center items-center px-2 xs:px-4 md:px-12 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
        <p className='text-xs xs:text-sm'>Sell</p> 
        <TiArrowUp />
      </div>
      <div onClick={() => handleTradeClick('buy')} className="flex gap-x-2 justify-center items-center px-2 xs:px-4 md:px-12 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
        <p className='text-xs xs:text-sm'>Buy</p>
        <IoMdArrowDown />
      </div>
      <div className="flex gap-x-2 justify-center items-center px-2 xs:px-4 md:px-12 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
        <p className='text-xs xs:text-sm'>Withdraw</p>  
        <RiInboxUnarchiveLine />
      </div>
      <div className="flex gap-x-2 justify-center items-center px-2 xs:px-4 md:px-12 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
        <p className='text-xs xs:text-sm'>Invite</p>  
        <HiOutlineInboxArrowDown />
      </div>
      <div className="w-full sm:w-auto flex justify-start mt-2 sm:mt-0">
        <div onClick={handleClick} className="flex gap-x-2 justify-start items-center px-2 xs:px-4 md:px-12 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
          <p className='text-xs xs:text-sm'>Order</p>  
          <HiOutlineInboxArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
