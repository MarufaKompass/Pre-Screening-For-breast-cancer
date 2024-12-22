import React from "react";
import backgroundImageUrl from "../../images/authBackground.png";
import sideDesign from "../../images/sideDesign.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
  // const handleRegister  = () => {
  //   navigate('registration')
  // } 
  return (
    <div
    className=" h-screen  bg-cover  bg-center  bg-no-repeat"
    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="flex justify-center items-center h-full ">
        <div className="border w-[55%] bg-white shadow-lg">
          <div className="grid grid-cols-2">
            <div>
              <div
                className=" h-[600px]  bg-cover bg-center  bg-no-repeat"
                style={{ backgroundImage: `url(${sideDesign})` }}
              >
                <div className="flex items-center justify-center h-[600px] px-10">
                <dv>
                <h2 className="text-white font-[poppins] font-bold text-[36px] ">Welcome to Website</h2>
                  <p className="text-white font-[poppins] text-[14px]">
                  "Join our community for vital information, support, and resources on breast cancer prevention and care."
                   
                  </p>
                </dv>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-[130px] mx-[30px]">
                <div>
                  <h1 className="text-center mb-3 font-[poppins] font-semibold text-[22px] text-[#BCA44E] underline">User Login </h1>

                  <div className="mb-4">
                    <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">Email *</p>
                    <input
                      type="email"
                      placeholder="Type Email"
                      className="input input-bordered w-full rounded-none text-sm placeholder-[#c5c5c7]"
                    />
                  </div>
                  <div>
                  <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">Password *</p>
                    <input
                      type="password"
                      placeholder="Type Password"
                      className="input input-bordered w-full rounded-none text-sm placeholder-[#c5c5c7]"
                    />
                  </div>
                  <div className="flex justify-end  pt-2 cursor-pointer">
                    <p className="font-[poppins] font-medium text-[12px] text-[#BCA44E]">Forgot Password?</p>
                  </div>

                  <div className="w-full flex justify-center items-center border py-2 mt-6 bg-[#BCA44E] cursor-pointer">
                    <button className="text-white font-bold ">Login</button>
                  </div>


                  <div className="mt-6 text-center">
                    <p className="font-[poppins] font-normal text-[14px] text-gray-600">Don't have an account ? <span   className="cursor-pointer pl-1 text-[#BCA44E] underline"><a href="./registration"> Registration here</a></span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
