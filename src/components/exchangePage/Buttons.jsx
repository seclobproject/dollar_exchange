import React from 'react';
import { TiArrowUp } from "react-icons/ti";
import { IoMdArrowDown } from "react-icons/io";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { HiOutlineInboxArrowDown } from "react-icons/hi2"
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext';
function Buttons() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); 

  const handleBuyClick = () => {
    isAuthenticated?  navigate("/details-form"):
    navigate('/login')
  
  };
  return (
    <div className="flex  justify-center gap-2 xs:gap-4 items-center w-full h-auto xs:py-12 py-4">
      <div className="flex  gap-x-2 justify-center items-center px-2 xs:px-4 md:px-14 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
      <p className='text-xs xs:text-sm'> Sell</p> 
        <TiArrowUp />
      </div>
      <div  onClick={handleBuyClick} className="flex text-sm gap-x-2 justify-center items-center px-2 xs:px-4 md:px-14 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
       <p className='text-xs xs:text-sm'> Buy</p>
        <IoMdArrowDown />
      </div>
      <div className="flex text-sm gap-x-2 justify-center items-center px-2 xs:px-4 md:px-14 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
      <p className='text-xs xs:text-sm'>Withdraw</p>  
        <RiInboxUnarchiveLine />
      </div>
      <div className="flex text-sm gap-x-2 justify-center items-center px-2 xs:px-4 md:px-14 py-2 md:py-4 border border-white hover:bg-white hover:text-black text-white rounded flex-row">
      <p className='text-xs xs:text-sm'>Invite</p>  
        <HiOutlineInboxArrowDown />
      </div>
    </div>
  );
}

export default Buttons;
