import React from "react";
import bannerImg from "../../images/breast-cancer.png";
export default function Banner() {
  return (
    <div className="bg-[#f7eef1]">
      <div className="py-mainPadding">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-20  md:px-0  px-8  ">
            <div className=" ">
              <div className="flex justify-center items-center h-full flex-1 ">
                <div>
                  <h1 className="text-[2.1rem] font-bold text-[#292929] leading-[3.5rem] font-[poppins]">
                    Trusted Guidance When You Need Us Most
                  </h1>
                  <p className="text-[14px] text-[#292929] mt-4 text-justify font-[poppins] leading-[1.6rem]">
                    Breast cancer is a type of cancer that develops in the
                    breast tissue. It is the most common cancer in women
                    worldwide, although it can also affect men. In this
                    discussion, we will explore various aspects of breast
                    cancer, including detection, diagnosis, treatment, and
                    prevention strategies
                  </p>
                  <div className="mt-4 ">
                    <a
                      href="http://myhealthrow.com/freact/bcq"
                      target="_blank"
                      alt=""
                      rel="noreferrer"
                    >
                      <button className=" px-[26px] py-3 bg-[#BCA44E] text-[#fff] rounded-none font-medium text-[16px] flex justify-center items-center font-[poppins]">
                        Self Pre Screening
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1">
              <img src={bannerImg} alt="img" className="w-[93%] h-[93%]"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
