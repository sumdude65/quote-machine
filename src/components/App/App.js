import React, { useState, useEffect } from "react";
import "./style.css";
import { Data } from "../data/index";
import { Header } from "../Header/index";
import { Review } from "../review/index";
import { LeftArrow, RightArrow } from "./icon";

export const App = () => {
  // eslint-disable-next-line
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  const maxPeople = people.length - 1;
  const updateIndex = () => {
    if (index > maxPeople) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  useEffect(() => {
    if (index < 0) {
      setIndex(maxPeople);
    }
    if (index > maxPeople) {
      setIndex(0);
    }
  }, [index, maxPeople]);
  useEffect(() => {
    let timeoutId = setInterval(updateIndex, 5000);
    return () => {
      clearInterval(timeoutId);
    };
  });
  return (
    <main className="main">
      <Header />
      <section className="center">
        {people.map((person, personIndex) => {
          let position = "";
          if (personIndex === index) {
            position = "active-slide";
          }
          if (personIndex < index) {
            position = "previous-slide";
          }
          if (personIndex > index) {
            position = "next-slide";
          }
          return (
            <section key={personIndex} className={position}>
              <Review props={person} />
            </section>
          );
        })}
        <button onClick={() => setIndex(index - 1)} className="btn left">
          <LeftArrow />
        </button>
        <button onClick={() => setIndex(index + 1)} className="btn right">
          <RightArrow />
        </button>
      </section>
    </main>
  );
};
