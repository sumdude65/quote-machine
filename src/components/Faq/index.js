import React from "react";
import { Data } from "../data/index";
import { QuestionBox } from "../QuestionBox/index";
import "./style.css";

export const Faq = () => {
  const entries = [...Data];
  return (
    <div className="faq">
      {entries.map((entry) => {
        return <QuestionBox key={entry.id} props={entry} />;
      })}
    </div>
  );
};
