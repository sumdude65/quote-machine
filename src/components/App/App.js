import React, { useState, useEffect } from "react";
import "./style.css";
import { Data } from "../data/index";
import { Review } from "../review/index";

export const App = () => {
  const entries = [...Data];
  let counter = 0;
  const [currentReview, setCurrentReview] = useState(entries[0]);
  useEffect(() => {
    setTimeout(() => {
      counter++;
      setCurrentReview(entries[counter]);
    }, 2000);
  }, [currentReview]);
  return (
    <main className="main">
      <Review props={currentReview} />
    </main>
  );
};
