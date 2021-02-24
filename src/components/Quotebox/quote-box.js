import React, { useState, useEffect } from "react";
import { url } from "../api";
import "./style.css";
import { twitterIcon } from "../icons/icon";
import { Loading } from "../animation/animation";

export const QuoteBox = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  //fetches quotes
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((obj) => {
        const { quotes } = obj;
        setData(quotes);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  //generates random index
  const newIndex = () => {
    let newNumber = Math.random * data.length;
    setIndex(newNumber);
  };
  // checks loading
  if (isLoading) {
    return <Loading />;
  }
  //renders content
  return (
    <main>
      {data.map((quote, idx) => {
        let position = "";
        if (idx === index) {
          position = "active-quote";
        } else {
          position = "quote";
        }
        return (
          <section className={position}>
            <main className="quotebox">
              <div className="quote">
                <h3>{quote.quote}</h3>
              </div>
              <div className="author">
                <p>-{quote.author}</p>
              </div>
              <div className="buttons">
                <a href="#">{twitterIcon}</a>
                <button className="btn" onClick={() => newIndex()}>
                  New Quote
                </button>
              </div>
            </main>
          </section>
        );
      })}
    </main>
  );
};
