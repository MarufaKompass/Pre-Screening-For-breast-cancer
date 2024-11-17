import React from "react";
import birthControls from "../../../images/pills.png";
export default function BirthControl() {
  return (
   <div className="bg-[#fafafa]">
     <div className="py-mainPadding">
      <div className="container_part_two">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0  px-8">
          <div>
            <h1 className="text-4xl font-bold mb-3 md:leading-[3.4rem] leading-[2.7rem]">
              Avoid Birth Control Pills.
            </h1>
            <p className="text-base">
              Birth control pills have both risks and benefits. The younger a
              woman is, the lower the risks are. While women are taking birth
              control pills, they have a slightly increased risk of breast
              cancer. This risk goes away quickly, though, after stopping the
              pill. The risk of stroke and heart attack is also increased while
              on the pill – particularly if a woman smokes.
            </p>
          </div>
          <div>
            <img src={birthControls} alt=""  className="shadow-lg rounded-md" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
