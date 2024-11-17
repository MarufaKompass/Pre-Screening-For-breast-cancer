import React from "react";
import about from "../../images/screening.jpg";
export default function Screening() {
  return (
    <div className="bg-[#fafafa]">
      <div className="py-mainPadding">
        <div className="container">
          <div className="mb-24 text-center ">
            <h1 className="text-4xl font-bold mb-3 md:leading-[3.4rem] leading-[2.7rem] ">
              Breast Cancer Screening for Early Detection
            </h1>
            <p className="pt-3 md:px-0  ">
              Screening is the best way to protect you from breast cancer. It
              does not help prevent the cancer, but it can help find it early
              when treatment is easier and less invasive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:px-0  px-8">
            <div className=" ">
              <div className="flex justify-center items-center h-full flex-1 ">
                <div>
                  <h4 className="text-xl font-bold">Breast Self- Awareness</h4>
                  <p className="text-base text-[#292929] mt-2 text-justify">
                    It is important to check yourself regularly, so that you can
                    spot any change immediately. Remember to check all parts of
                    your breasts, armpits and up to your collarbone. Check once
                    a month, one week after your period, after age 20
                  </p>

                  <h4 className="text-xl font-bold mt-4">
                    Clinical Breast Exam
                  </h4>
                  <p className="mt-2 text-base text-[#292929]  text-justify">
                    It is an examination by a doctor or nurse who will check
                    both breasts and the lymph nodes in armpits. Recommended
                    every 3 years between 20 & 30 and every year after 40
                  </p>

                  <h4 className="text-xl font-bold mt-4">Mammography</h4>
                  <p className="mt-2 text-base text-[#292929]  text-justify">
                    It is an x-ray of the breast which can find cancer when it
                    is too small to be felt. To be done after age 45 upon advice
                    of Doctor and based on personal risk factors. If an
                    abnormality is detected, the doctor may recommend a
                    diagnostic mammogram for further evaluation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1">
              <img src={about} alt="img" className="shadow-lg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
