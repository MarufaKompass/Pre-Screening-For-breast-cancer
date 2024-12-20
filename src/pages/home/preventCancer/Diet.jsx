import React from "react";
import diet from "../../../images/diet.png";
export default function Diet() {
  return (
<div className="bg-[#fafafa]">
<div className="py-mainPadding">
      <div className="container_part_two">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0  px-8">
       <div className="flex items-center">
       <div>
            <h1 className="text-4xl font-bold mb-3 md:leading-[3.1rem] leading-[2.7rem] font-[poppins]  ">
              Eat Your Fruits & Vegetables – and Limit Alcohol (Zero is Best)
            </h1>
            <p className="font-[poppins] text-[16px] text-[#292929]">
              A healthy diet can help lower the risk of breast cancer. Try to
              eat a lot of fruits and veggies and limit alcohol. Even low levels
              of drinking can increase the risk of breast cancer. And with other
              risks of alcohol, not drinking is the overall best choice for your
              health.
            </p>
          </div>
       </div>
          <div>
            <img src={diet} alt=""   />
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
