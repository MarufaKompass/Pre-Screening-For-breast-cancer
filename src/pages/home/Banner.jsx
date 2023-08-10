import React from "react";
import bannerImg from "../../images/breast-cancer.png";
export default function Banner() {
  return (
        <div className="bg-[#f7ebef]">
    <div className="py-mainPadding">
      <div className="container">
        <div className="grid grid-cols-2 ">
          <div className="pr-24 ">
            <div className="flex justify-center items-center h-full flex-1 ">
              <div>
                <h1 className="text-[3rem] font-bold text-[#292929] leading-[3.5rem]">
                  Trusted Guidance When You<br></br> Need Us Most
                </h1>
                <p className="text-xl text-[#292929] mt-4">
                  Breast cancer is a type of cancer that develops in the breast
                  tissue. It is the most common cancer in women worldwide,
                  although it can also affect men. In this discussion, we will
                  explore various aspects of breast cancer, including detection,
                  diagnosis, treatment, and prevention strategies
                </p>
               <div className="mt-4 ">
               <a href="http://myhealthrow.com/freact/bcq" target="_blank" alt="" rel="noreferrer"> 
               <button className="h-[3.2rem] bg-[#BCA44E] w-48 text-[#fff] rounded-md font-semibold text-xl flex justify-center items-center">Self Pre Screeing</button>
               </a>
              
               </div>
              </div>
              
            </div>
           
          </div>
          <div className="flex justify-center flex-1">
            <img src={bannerImg} alt="img"  className="w-[600px] h-[500px]"></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
