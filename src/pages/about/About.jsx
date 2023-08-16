import React from "react";
import about from "../../images/about.png";
export default function About() {
  return (
    <div className="bg-[#fafafa]">
      <div className="py-mainPadding">
        <div className="container">
          <div className="mb-24 text-center">
            <h1 className="text-4xl font-bold ">About Breast Cancer</h1>
            <p className="pt-3">
              provide you with some general guidelines that are commonly
              suggested to help reduce the risk of cancer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:px-0  px-8 ">
            <div className="flex justify-center flex-1">
              <img src={about} alt="img" className="shadow-lg"></img>
            </div>

            <div className=" ">
              <div className="flex justify-center items-center h-full flex-1 ">
                <div>
                  <h1 className="lg:text-[2.2rem] text-[1.9rem] font-bold text-[#292929] leading-[2rem]">
                    Need to know about Breast Cancer.
                  </h1>
                  <p className="text-base text-[#292929] mt-4 text-justify font-normal">
                    Breast cancer is a type of cancer that originates in the
                    cells of the breast tissue. It can occur in both men and
                    women but is far more common in women. Breast cancer
                    typically begins in the milk ducts or lobules, which are the
                    parts of the breast responsible for producing milk.
                  </p>
                  <p className="mt-4 text-base text-[#292929] text-justify">
                    Breast cancer can present with various symptoms, including a
                    lump or thickening in the breast, changes in size or shape,
                    skin changes, nipple discharge, and pain. Early detection is
                    crucial for successful treatment. Regular self-exams,
                    clinical breast exams, and mammograms are important for
                    detecting the disease in its early stages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
