import React from "react";
import logo from "../Assets/logo.svg";

function Navbar() {
  return (
    <div className="px-8 flex justify-between items-center bg-black text-white">
      <div className="flex justify-center items-center">
        <div>
          <img className="w-[111px]" src={logo} alt="" />
        </div>
        <div className="">
          <ul className="flex justify-center items-center ml-6">
            <li className="m-2 ">Platform</li>
            <li className="m-2 ">Developers</li>
            <li className="m-2 ">Network</li>  
            <li className="m-2 ">Resources</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="m-4 rounded-lg bg-sky-600 p-2">Start Meeting</div>
        <div className="m-4 rounded-lg bg-white text-black p-2">Start Building</div>
      </div>
    </div>
  );
}

export default Navbar;
