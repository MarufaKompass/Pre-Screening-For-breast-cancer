import React from "react";
import avtive from "../../../images/active.png";
export default function PhysicallyActive() {
  return (
    <div className="py-mainPadding">
      <div className="container_part_two">
        <div>
            <h1 className="text-4xl font-bold mb-24 text-center">Ways to Prevent Breast Cancer</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div>
              <img src={avtive} alt=""  className="w-[600px] h-[400px]"/>
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
