import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { Bars3BottomRightIcon,  XMarkIcon } from '@heroicons/react/24/solid'
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("LOGOUT");
  const onlineStatus = useOnlineStatus();
  const { ABOUT } = useContext(UserContext);
  const [open, setOpen] =useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="flex justify-between  h-auto w-full shadow-md p-4 ">
      <div className="flex items-center">
        <img
          className="w-[50px] h-auto"
          src="https://image.winudf.com/v2/image1/aW4uc3dpZ2d5LmFuZHJvaWRfaWNvbl8xNTYyMTU3NDE4XzA1MA/icon.webp?w=140&fakeurl=1&type=.webp"
          alt="food-logo"
        />
        <h3 className="text-[#ff7200] font-bold">Food Panda</h3>
      </div>
      <div onClick={()=>setOpen(!open)} className='absolute right-10 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
      <div className="flex items-center">
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-[999999999]  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          <li className=" hidden md:visible list-none p-3 ml-[50px] mr-[20px] font-sans text-base cursor-pointer text-[#3d4152] text-center font-bold no-underline  sm:hidden ">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>
          <li onClick={() =>  setOpen(!open) } className="md:mx-auto">
            <Link
              className="list-none p-3 ml-[50px] mr-[20px] font-sans text-base cursor-pointer text-[#3d4152] text-center font-bold no-underline hover:bg-[#ff7200]  hover:text-white transition ease-in-out delay-150 rounded-lg md:ml-8 md:my-0 my-7 md:mx-auto "
              to="/"
            >
              HOME
            </Link>
          </li>
          {/* useContext is used here */}
          <li onClick={() =>  setOpen(!open) }>
            <Link
              className="list-none p-3 ml-[50px] mr-[20px] font-sans text-base cursor-pointer text-[#3d4152] text-center font-bold no-underline hover:bg-[#ff7200]  hover:text-white transition ease-in-out delay-150 rounded-lg md:ml-8 md:my-0 my-7"
              to="/about"
            >
              {ABOUT}
            </Link>
          </li>
          <li onClick={() =>  setOpen(!open) }>
            <Link
              className="list-none p-3 ml-[50px] mr-[20px] font-sans text-base cursor-pointer text-[#3d4152] text-center font-bold no-underline hover:bg-[#ff7200]  hover:text-white transition ease-in-out delay-150 rounded-lg md:ml-8 md:my-0 my-7 pb-3"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
          <li onClick={() =>  setOpen(!open) } >
            <Link className="list-none p-3  ml-[50px] mr-[20px] font-sans text-base cursor-pointer text-[#3d4152] text-center font-bold no-underline  rounded-lg md:ml-8 md:my-0 my-5 pb-3 " to="/cart">
           CART({cartItems.length})
            </Link>
            
            
          </li>
                
        {/* ternary  operator used for btn toggle inside the onclick event handler */}
        <li  onClick={() =>  setOpen(!open) }>
         <Link className="list-none p-3 ml-[50px] mr-[20px] font-sans text-base cursor-pointer text-[#3d4152] text-center font-bold no-underline hover:bg-[#ff7200]  hover:text-white transition ease-in-out delay-150 rounded-lg md:ml-8 md:my-0 my-7 "
          onClick={() => {
            btnName === "LOGOUT" ? setBtnName("LOGIN") : setBtnName("LOGOUT");
          }}
        > {btnName} </Link>
        </li>
        </ul>
      </div>

      
    </div>
  );
};
export default Header;
