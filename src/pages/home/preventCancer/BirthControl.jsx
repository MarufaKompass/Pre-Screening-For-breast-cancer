import React from "react";
import birthControls from "../../../images/pills.png";
export default function BirthControl() {
  return (
   <div className="bg-[#fafafa]">
     <div className="py-mainPadding">
      <div className="container_part_two">
        <div className="grid grid-cols-2  gap-10">
          <div>
            <h1 className="text-4xl font-bold mb-3">
              Avoid Birth Control Pills, Particularly After Age 35 or If You
              Smoke
            </h1>
            <p className="text-xl">
              Birth control pills have both risks and benefits. The younger a
              woman is, the lower the risks are. While women are taking birth
              control pills, they have a slightly increased risk of breast
              cancer. This risk goes away quickly, though, after stopping the
              pill. The risk of stroke and heart attack is also increased while
              on the pill – particularly if a woman smokes. But long-term use
              can also have important benefits, like lowering the risk of
              ovarian, colon and uterine cancers. Birth control pills also
              prevent unwanted pregnancy, so there’s also a lot in their favor.
              If you’re very concerned about breast cancer, avoiding birth
              control pills is one option to lower risk
            </p>
          </div>
          <div>
            <img src={birthControls} alt="" className="w-[600px] h-[500px]" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
