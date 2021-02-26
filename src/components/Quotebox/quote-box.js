import React, { useState, useEffect } from "react";
import { url } from "../api";
import { Quote } from "../Quote/index";
import { Loading } from "../animation/animation";
import "./style.scss";

export const QuoteBox = () => {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentColor, setCurrentColor] = useState("");

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  useEffect(() => {
    setCurrentColor(colors[Math.round(Math.random() * (colors.length - 1))]);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setQuotes(data.quotes))
      .then(() => setLoading(false));
  }, []);

  const handleClick = () => {
    setCurrentColor(colors[Math.round(Math.random() * (colors.length - 1))]);
    const newNumber = Math.round(Math.random() * (quotes.length - 1));
    setCurrentQuote(newNumber);
    console.log(currentQuote);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main
      style={{ backgroundColor: currentColor }}
      className="bg"
      id="quote-box"
    >
      {quotes.map((quote, index) => {
        let position;
        if (index === currentQuote) {
          position = "active";
        }
        if (index === currentQuote) {
          return (
            <div key={index} className={position}>
              <Quote
                handleClick={() => handleClick()}
                props={quote}
                color={currentColor}
              />
            </div>
          );
        } else {
          return;
        }
      })}
    </main>
  );
};
