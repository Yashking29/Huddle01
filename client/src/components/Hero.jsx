import React from "react";
import Body from "./Body";
// import pic2 from ''

function Hero() {
  return (
    <div className="border-[0.075rem] border-gray-100/20">
      <div className="flex justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-lg">
        <span>Affectecd by</span>
        <span className="ml-2 mr-2">
          <img
            className="w-[100px]"
            src="src/Assets/pic2.webp"
            type="image/webp"
            alt=""
          />
        </span>
        <span>
          <p>
            Video SDK Shutting down? Get 6 Months FREE credits for Huddle01 SDK
          </p>
        </span>
        <span className="bg-white border-2 m-3 rounded-lg text-black px-2">
          <button>Migration Guide{"->"} </button>
        </span>
      </div>
      <div className="text-white ">
      
       <div className="flex justify-center my-5 ">
        <button className="flex justify-center rounded-lg bg-gray-500 px-2">
            <div className="border-gray-900 rounded-lg mx-2 bg">Node Operator</div>
            <div className="flex items-center space-x-2"><span>Join the waitlist for running a node</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></div>
        </button>
       </div>
        

        <div className="flex justify-center ">
          <h1 className="text-7xl">People-powered <br /> Communication</h1>
        </div>

        <div className="flex justify-center m-5">
          <p className="text-center font-semibold m-4">
            Building the 1st DePIN for RTC to democratize connectivity over
            cyberspace.  <br />Leverage our current suite of SDKs to build high-quality
            audio/video applications in minutes.
          </p>
        </div>
          
          <div className="flex justify-center">
            <button className="border-2 mx-3 bg-white text-black p-2 rounded-lg">Start Building</button>
            <button className="flex items-center space-x-2 border-2 p-2 rounded-lg"><span>Discover Network</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></button>
          </div>

      </div>

      <div className="flex justify-center items-center">
        <Body />
      </div>
    </div>
  );
}

export default Hero;
