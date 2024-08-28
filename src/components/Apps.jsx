
import React from "react";
import UserDetails from "./UserDetails";


function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-center flex-col items-center w-full">
          <div className="text-[#cacdca] uppercase mt-5 flex flex-col justify-center items-center">
            <div className="flex  justify-center items-center text-[60px]">
              Admin table
            </div>
            <div className="flex  justify-center items-center text-sm">
              One Destination for complete Web Development
            </div>
          </div>
          <div className="flex justify-center uppercase items-center gap-10 p-6">
            <a href="">
              <div className="py-2 bg-slate-200 text-gray-600 border-none rounded-[30px] px-6 ">
                Home
              </div>
            </a>
            <a href="">
              <div className="py-2 bg-slate-200 text-gray-600 border-none rounded-[30px]  px-6 ">
                about
              </div>
            </a>
            <a href="">
              <div className="py-2 bg-slate-200 text-gray-600 border-none rounded-[30px]  px-6 ">
                project
              </div>
            </a>
            <a href="">
              <div className="py-2 bg-slate-200 text-gray-600 border-none rounded-[30px]  px-6 ">
                code
              </div>
            </a>
            <a href="">
              <div className="py-2 bg-slate-200 text-gray-600 border-none rounded-[30px]  px-6 ">
                contact
              </div>
            </a>
          </div>
          <UserDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
