import React from "react";
import Logo from "./Logo";
import { GoSearch } from "react-icons/go";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className=" h-full container mx-auto flex items-center justify-between px-4">
        <div className="">
          <Logo w={90} h={50}></Logo>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm  border rounded-full focus-within:shadow pl-2">
          <input type="text" placeholder="Search product here...." className="w-full outline-none "/>
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center text-white rounded-r-full">
          <GoSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
            <div className="text-3xl cursor-pointer">
                <FaRegUserCircle/>
            </div>
            <div className="text-3xl cursor-pointer relative">
                <span><FaShoppingCart/></span>
                <div className="bg-red-600 text-white w-5 p-1 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2">
                    <p className="text-sm">0</p>
                </div>
            </div>

            <div>
                <button className="px-3 py-1 text-white rounded-full bg-red-600 hover:bg-red-700">Login</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
