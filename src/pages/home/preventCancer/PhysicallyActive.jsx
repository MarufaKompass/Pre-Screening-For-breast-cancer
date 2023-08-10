import React from "react";
import active from "../../../images/active.png";
export default function PhysicallyActive() {
  return (
    <div className="py-mainPadding">
      <div className="container_part_two">
        <div className="mb-24 text-center">
            <h1 className="text-4xl font-bold ">Ways to Prevent Breast Cancer</h1>
            <p className="pt-3">
            provide you with some general guidelines that are commonly suggested to help reduce the risk of cancer. 
            </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div>
              <img src={active} alt=""  className="w-[600px] h-[500px]"/>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-3">Be Physically Active</h1>
            <p className="text-xl">
              Exercise is as close to a silver bullet for good health as there
              is. Women who are exercise for at least 30 minutes a day have a
              lower risk of breast cancer. Regular exercise is also one of the
              best ways to help keep weight in check.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
