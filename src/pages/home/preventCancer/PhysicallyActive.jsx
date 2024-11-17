import React from "react";
import active from "../../../images/active.png";
export default function PhysicallyActive() {
  return (
    <div className="py-mainPadding">
      <div className="container_part_two">
        <div className="mb-24 text-center">
            <h1 className="text-4xl font-bold  font-[poppins] ">Ways to Prevent Breast Cancer</h1>
            <p className="pt-3  font-[poppins] text-[16px] text-[#292929]">
            provide you with some general guidelines that are commonly suggested to help reduce the risk of cancer. 
            </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0  px-8">
          <div>
            <div>
              <img src={active} alt="" />
            </div>
          </div>
        <div className="flex items-center">
        <div>
            <h1 className="lg:text-[2.2rem] text-[1.5rem] font-bold mb-3 leading-[2rem]  font-[poppins]  text-[#292929]">Be Physically Active</h1>
            <p className="font-[poppins] text-[16px] text-[#292929]">
              Exercise is as close to a silver bullet for good health as there
              is. Women who are exercise for at least 30 minutes a day have a
              lower risk of breast cancer. Regular exercise is also one of the
              best ways to help keep weight in check.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
