import React from "react";
import breastfeed from "../../../images/Breastfeed.png";
export default function Breastfeed() {
  return (
    <div className="py-mainPadding">
      <div className="container_part_two">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0  px-8">
          <div>
            <div>
              <img src={breastfeed} alt=""   />
            </div>
          </div>
        <div className="flex items-center">
        <div>
            <h1 className="text-4xl font-bold mb-3 md:leading-[3.4rem] leading-[2.7rem] font-[poppins]  ">Breastfeed, If Possible</h1>
            <p className="font-[poppins] text-[16px] text-[#292929]">
              Breastfeeding for a total of one year or more (combined for all
              children) lowers the risk of breast cancer. It also has great
              health benefits for the child. For breastfeeding information or
              support, contact your pediatrician, hospital or local health
              department.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
