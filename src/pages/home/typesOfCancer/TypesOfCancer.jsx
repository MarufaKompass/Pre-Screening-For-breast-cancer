import React from "react";
import breastCancer from "../../../images/breastCancer.jpg";
import cervicalCancer from "../../../images/cervicalCancer.jpg";
import colonCancer from "../../../images/colonCancer.jpg";
import prostatePancer from "../../../images/prostateCancer.jpg";
export default function TypesOfCancer() {
  return (
    <div className="py-mainPadding">
      <div className="container">
        <div className="mb-24 text-center">
          <h1 className="text-4xl font-bold ">Types Of Cancer</h1>
          <p className="pt-3">
            provide you with some general guidelines that are commonly suggested
            to help reduce the risk of cancer.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:px-0  px-8">
          <div className="border relative ">
            <div>
              <img src={breastCancer} alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold text-base pb-4">
                Unveiling the Facts: Navigating Breast Cancer
              </h1>
              <p className="text-justify  pb-16 text-base">
                Remember that the information provided here is a general
                overview, and if you or someone you know is concerned about
                breast cancer, it's important to consult a healthcare
                professional for accurate and personalized information and
                guidance.
              </p>
              <div className="absolute bottom-4">
                <button>
                  <small className="text-primary">Learn more</small>
                </button>
              </div>
            </div>
          </div>
          <div className="border relative">
            <div>
              <img src={cervicalCancer} alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold text-base pb-4">
                The Silent Threat: Unveiling the Realities of Cervical Cancer
              </h1>
              <p className="text-justify pb-16 text-base">
                Cervical cancer is a type of cancer that starts in the cervix,
                the narrow lower portion of the uterus (womb) that connects to
                the vagina. It primarily affects women, and it is often caused
                by human papillomavirus (HPV) infection.{" "}
              </p>
              <div className="absolute bottom-4">
                <button>
                  <small className="text-primary">Learn more</small>
                </button>
              </div>
            </div>
          </div>
          <div className="border relative">
            <div>
              <img src={colonCancer} alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold text-base pb-4">
                Colon Cancer Unveiled: Insights into Detection and Treatment
              </h1>
              <p className="text-justify  pb-16 text-base">
                Colon cancer, also known as colorectal cancer, is a type of
                cancer that starts in the colon (large intestine) or the rectum
                (the end of the colon). It usually begins as a growth called a
                polyp, which can become cancerous over time. Colon cancer is one
                of the most common types of cancer worldwide.
              </p>
              <div className="absolute bottom-4">
                <button>
                  <small className="text-primary">Learn more</small>
                </button>
              </div>
            </div>
          </div>
          <div className="border relative">
            <div>
              <img src={prostatePancer} alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold text-base pb-4">
                Prostate Cancer Unveiled: Understanding the Basics
              </h1>
              <p className="text-justify  pb-16 text-base">
                Prostate cancer is a type of cancer that develops in the
                prostate gland, a small walnut-sized gland that produces seminal
                fluid in men. It's one of the most common types of cancer in
                men, particularly among older men.
              </p>
              <div className="absolute bottom-4">
                <button>
                  <small className="text-primary">Learn more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
