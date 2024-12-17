import React from "react";
import QuesnarisePart from "./QuestionnairePart";

export default function Quesnarise() {
  return (
    <div>
      <div className="border h-60 flex justify-center items-center bg-[#BCA44E]">
        <p className="font-[poppins]  text-[66px] uppercase text-[#fff] font-bold">
          Questionnaire
        </p>
      </div>
      <div className="container">
        <QuesnarisePart></QuesnarisePart>
      </div>
    </div>
  );
}
