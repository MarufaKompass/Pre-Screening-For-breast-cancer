import React from "react";
import breastfeed from "../../../images/Breastfeed.png";
export default function Breastfeed() {
  return (
    <div className="py-mainPadding">
      <div className="container_part_two">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div>
              <img src={breastfeed} alt="" className="w-[600px] h-[500px]" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-3">Breastfeed, If Possible</h1>
            <p className="text-xl">
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
  );
}
